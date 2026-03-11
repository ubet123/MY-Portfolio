import React from 'react';
import { FiDownload } from 'react-icons/fi';

const DownloadButton = ({ href, download }) => {
  return (
    <a
      href={href}
      download={download}
      className="inline-flex items-center gap-2 rounded-xl border border-yellow-300/40 bg-yellow-300 px-5 py-3 font-heading text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-200 hover:shadow-[0_0_18px_rgba(250,204,21,0.18)]"
    >
      Resume
      <FiDownload className="text-lg" />
    </a>
  );
};

export default DownloadButton;
