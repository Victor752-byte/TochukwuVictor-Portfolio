import React from 'react';

const ResumeButtons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {/* View Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black-200 text-white-100 p-2 md:px-4 md:py-2 rounded hover:bg-[rgb(0,17,82)]"
      >
        View Resume
      </a>

      {/* Download Resume Button */}
      <a
        href="/resume.pdf"
        download="Tochukwu_Victor_Resume.pdf"
        className="bg-[rgb(108,0,162)] text-white-100 p-2 md:px-4 md:py-2 rounded hover:bg-black-200"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButtons;
