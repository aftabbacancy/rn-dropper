import Modal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";
import Link from "next/link";

interface PorjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const NewProjectModal = ({ isOpen, closeModal }: PorjectModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="top-[50%] left-[50%] absolute right-auto bottom-auto mr-[-50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[70%] rounded-xl p-6 max-h-[93%] overflow-scroll"
      overlayClassName="fixed backdrop-blur inset-0 backdrop-brightness-50 h-screen py-10"
      contentLabel="Example Modal"
    >
      <h1 className="text-xl font-medium">Create Project</h1>
      <h2 className="text-sm font-light text-gray-600 mb-5">
        Select a template, or name your project and create a blank app below.
      </h2>
      <IoIosCloseCircle
        size={40}
        className="absolute right-6 top-6 cursor-pointer"
        onClick={closeModal}
      />
      <input
        type="text"
        placeholder="Enter your project name..."
        className="w-full border border-gray-400 rounded-lg text-2xl p-3 focus:bg-blue-100"
      />
      <div className="grid grid-cols-4 overflow-scroll">
        {[
          {
            id: "sd",
            title: "Blank App",
            image: "/noritz.png",
            description: [
              "14 Screens",
              "Firestore",
              "Authentication",
              "Custom Functions",
            ],
          },
          {
            id: "smmmmmd",
            title: "Food App",
            image: "/noritz.png",
            description: [
              "14 Screens",
              "Firestore",
              "Authentication",
              "Custom Functions",
            ],
          },
          {
            id: "sdf",
            title: "Travel App",
            image: "/noritz.png",
            description: [
              "14 Screens",
              "Firestore",
              "Authentication",
              "Custom Functions",
            ],
          },
          {
            id: "sdjj",
            title: "Food App",
            image: "/noritz.png",
            description: [
              "14 Screens",
              "Firestore",
              "Authentication",
              "Custom Functions",
            ],
          },
          {
            id: "sdij",
            title: "Food App",
            image: "/noritz.png",
            description: [
              "14 Screens",
              "Firestore",
              "Authentication",
              "Custom Functions",
            ],
          },
          {
            id: "suy7df",
            title: "Food App",
            image: "/noritz.png",
            description: [
              "14 Screens",
              "Firestore",
              "Authentication",
              "Custom Functions",
            ],
          },
        ].map((item, index) => {
          if (index == 0) {
            return (
              <div
                key={item.id}
                className="text-center items-center justify-center mt-10 block"
              >
                <h2 className="text-center text-md font-semibold mb-3 text-gray-600">
                  Blank App
                </h2>
                <div className="border-2 border-gray-800 max-w-48 min-h-96 rounded-xl items-center justify-center block mx-auto">
                  <Link
                    href="#"
                    className="bg-blue-700 px-4 py-2 inline-block text-white rounded mt-[85%]"
                  >
                    Create Blank
                  </Link>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={item.id}
                className="text-center items-center justify-center mt-10 block"
              >
                <h2 className="text-center text-md font-semibold mb-3 text-gray-600">
                  {item.title}
                </h2>
                <div className="border-2 max-w-48 min-h-96 rounded-xl items-center justify-center mx-auto block overflow-hidden bg-[url(/noritz.png)] bg-cover">
                  <div className="flex flex-1 flex-col items-center justify-center opacity-0 hover:opacity-100 h-full w-full min-h-96 backdrop-blur inset-0 backdrop-brightness-100 rounded-xl">
                    <div className="pt-auto">
                      {item.description.map((item, indexs) => {
                        return (
                          <p
                            className="text-white py-1 text-sm block"
                            key={indexs}
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                    <Link
                      href="/project/someId"
                      className="bg-blue-700 px-4 py-2 inline-block text-sm text-white rounded mt-5"
                    >
                      Use Template
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </Modal>
  );
};

export default NewProjectModal;
