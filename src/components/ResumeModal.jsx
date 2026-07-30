import React from 'react';
import { FaTimes, FaDownload, FaFilePdf } from 'react-icons/fa';

const ResumeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0D1B2A]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#1B263B] border border-[#415A77]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0D1B2A] border-b border-[#415A77]/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#415A77]/30 border border-[#778DA9]/40 flex items-center justify-center text-[#778DA9]">
              <FaFilePdf />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#E0E1DD] font-heading leading-tight">
                Ahmad Khan Lodhi — Resume
              </h3>
              <p className="text-xs text-[#778DA9]">PDF Document Preview</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Ahmad_Khan_Lodhi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#E0E1DD] bg-gradient-to-r from-[#415A77] to-[#778DA9] hover:from-[#364b63] hover:to-[#637792] shadow-lg shadow-[#0D1B2A] transition-all"
            >
              <FaDownload /> Download PDF
            </a>
            
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-[#1B263B] border border-[#415A77]/40 text-[#E0E1DD] flex items-center justify-center hover:bg-[#415A77]/40 hover:text-white transition-all"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="p-4 sm:p-6 bg-[#0D1B2A]/50 flex-1 overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Ahmad Khan Lodhi Resume Preview"
            className="w-full h-[70vh] sm:h-[75vh] rounded-xl border border-[#415A77]/30 bg-[#0D1B2A] shadow-inner"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-[#0D1B2A] border-t border-[#415A77]/30 flex items-center justify-between text-xs text-[#778DA9]">
          <span>Tip: You can preview the full resume above or click Download to save the PDF file.</span>
          <button
            onClick={onClose}
            className="text-[#E0E1DD] hover:underline font-semibold"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
