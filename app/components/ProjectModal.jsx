"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import { LinkIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";

export default function ProjectModal({
  open,
  setOpen,
  projectData,
  isDarkMode,
}) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={`relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-4/5 data-closed:sm:translate-y-0 data-closed:sm:scale-95 ${
              isDarkMode ? "bg-[#11001f]" : "bg-white"
            }`}
          >
            {/* Project Details */}
            <div
              className={`px-4 pt-5 pb-4 sm:p-6 ${
                isDarkMode ? "bg-[#11001f]" : "bg-white"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <DialogTitle
                    as="h3"
                    className={`text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {projectData.title}
                  </DialogTitle>
                </div>
                <div className="space-y-2">
                  <h4
                    className={`text-sm font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projectData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`rounded-full px-3 py-1 text-sm ${
                          isDarkMode
                            ? "bg-gray-800 text-gray-200"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`prose prose-sm max-w-none ${
                    isDarkMode ? "prose-invert text-gray-300" : "text-gray-600"
                  }`}
                >
                  {/* <ReactMarkdown>{projectData.description}</ReactMarkdown> */}
                  {/* render HTML description content */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: projectData.description,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className={`px-4 py-3 sm:px-6 ${
                isDarkMode ? "bg-[#11001f]" : "bg-gray-50"
              } flex items-center justify-end space-x-2`}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className={`text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ${
                  isDarkMode
                    ? "bg-[#11001f] text-white hover:text-[#11001f]"
                    : "bg-gray-50"
                } dark:focus:ring-gray-700`}
              >
                Close
              </button>

              <a
                href={projectData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="flex items-center gap-2 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-transparent group-hover:dark:bg-transparent">
                  <LinkIcon className="w-5 h-5" />
                  View Project
                </span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}