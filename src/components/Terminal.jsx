import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Terminal.css';

export default function Terminal({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState([
    { type: 'system', text: `Welcome to ${portfolioData.personal.name}'s terminal!` },
    { type: 'system', text: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    if (onOpen) onOpen();
  };

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const commands = portfolioData.terminalCommands;

    const newLines = [
      ...lines,
      { type: 'input', text: `> ${cmd}` },
    ];

    if (trimmed === 'clear') {
      setLines([
        { type: 'system', text: 'Terminal cleared.' },
        { type: 'system', text: 'Type "help" for available commands.' },
      ]);
    } else if (commands[trimmed]) {
      setLines([...newLines, { type: 'output', text: commands[trimmed] }]);
    } else if (trimmed === '') {
      setLines(newLines);
    } else {
      setLines([
        ...newLines,
        { type: 'output', text: `Command not found: "${trimmed}". Type "help" for available commands.` },
      ]);
    }

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <>
      <button
        className="terminal-toggle"
        onClick={handleOpen}
        aria-label="Open terminal"
        title="Open Terminal"
      >
        <i className="fas fa-terminal" />
      </button>

      {isOpen && (
        <div className="terminal">
          <div className="terminal__header">
            <div className="terminal__header-dots">
              <span className="terminal__header-dot terminal__header-dot--red" />
              <span className="terminal__header-dot terminal__header-dot--yellow" />
              <span className="terminal__header-dot terminal__header-dot--green" />
            </div>
            <span className="terminal__title">rahul@portfolio:~$</span>
            <button
              className="terminal__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close terminal"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          <div className="terminal__body" ref={bodyRef}>
            {lines.map((line, i) => (
              <div key={i} className={`terminal__line terminal__line--${line.type}`}>
                {line.text}
              </div>
            ))}
          </div>

          <div className="terminal__input-row">
            <span className="terminal__prompt">$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal__input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command..."
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
      )}
    </>
  );
}
