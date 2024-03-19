"use client";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";

const ProjectEdit = () => {
  const [parent, setParent] = useState(null);

  const [selectedComponent, setSelected] = useState("");
  const [renderedData, setRenderedData] = useState<any>([]);
  const [editComp, setEditComp] = useState(-1);

  const draggableTextView = (
    <Draggable id="text">
      <div className="bg-gray-400 text-white rounded border border-gray-700 text-center py-6">
        <p>Text</p>
      </div>
    </Draggable>
  );

  const draggableView = (
    <Draggable id="view">
      <div className="bg-gray-400 text-white rounded border border-gray-700 text-center py-6">
        <p>View</p>
      </div>
    </Draggable>
  );

  const draggableButton = (
    <Draggable id="button">
      <div className="bg-gray-400 text-white rounded border border-gray-700 text-center py-6">
        <p>Button</p>
      </div>
    </Draggable>
  );

  return (
    <div className="bg-blue-50 h-screen min-w-screen">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="bg-blue-600 text-white px-5 py-2 w-full fixed">
          <h1 className="text-base font-semibold flex flex-1">React Dropify</h1>
          <p className="text-xs">App name</p>
        </div>
        <div className="w-screen h-full flex flex-row">
          {/** Left Side bar for menu */}
          <div className="w-1/5 bg-white p-5 fixed h-full grid grid-cols-3 items-start gap-3 mt-14">
            {draggableTextView}
            {draggableView}
            {draggableButton}
          </div>
          <div className="w-1/5 rounded-lg p-5 flex flex-col h-full"></div>

          {/** Main Content area */}
          <div className="flex flex-1 ml-4 h-full pt-14 flex-row">
            <div className="w-[70%] h-full z-30 bg-[url('/frame.png')] bg-no-repeat bg-contain self-center pt-20 pl-10 pr-10">
              <Droppable id="droppable">
                <div className="min-h-120 h-full max-w-80">
                  <div className="min-h-20 h-full w-full">
                    {renderedData.map((item: any, index: number) => {
                      return (
                        <div key={index} className="relative">
                          {item.tag == "text" && (
                            <>
                              <p
                                onClick={() => setEditComp(index)}
                                className={
                                  editComp == index
                                    ? "border border-blue-300 group"
                                    : "border border-transparent hover:border-orange-200 group"
                                }
                              >
                                <p className="absolute top-[-15px] text-xs bg-blue-300 rounded px-1 group-hover:visible invisible text-white">
                                  Text
                                </p>
                                <p style={item.style}>{item.value}</p>
                              </p>
                            </>
                          )}
                          {item.tag == "button" && (
                            <p
                              onClick={() => setEditComp(index)}
                              className={
                                editComp == index
                                  ? "border border-blue-300 group"
                                  : "border border-transparent hover:border-orange-200 group"
                              }
                            >
                              <p className="absolute top-[-15px] text-xs bg-blue-300 rounded px-1 group-hover:visible invisible text-white">
                                Button
                              </p>
                              <button onClick={item.onClick} style={item.style}>
                                {item.value}
                              </button>
                            </p>
                          )}
                          {item.tag == "view" && <p>{item.value}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Droppable>
            </div>
            <div className="w-1/3 h-full bg-blue-400">
              <div className="border-y border-blue-200 px-5 py-2">
                <p>Text</p>
                <textarea
                  name="text"
                  value={renderedData[editComp]?.value}
                  className="border rounded px-3 py-1 bg-blue-300 mt-1 w-full"
                  onChange={(e) => {
                    const d = JSON.parse(JSON.stringify(renderedData));
                    d[editComp].value = e.target.value;
                    setRenderedData(d);
                  }}
                />
              </div>
              <div className="border-y border-blue-200 px-5 py-2">
                <p>Font Size</p>
                <input
                  type="number"
                  value={
                    renderedData[editComp]?.style?.fontSize == undefined
                      ? ""
                      : renderedData[editComp]?.style?.fontSize
                  }
                  className="border rounded px-3 py-1 bg-blue-300 mt-1 w-full"
                  onChange={(e) => {
                    const d = JSON.parse(JSON.stringify(renderedData));
                    const oj = JSON.parse(JSON.stringify(d[editComp]));
                    console.log(oj);
                    oj.style.fontSize = parseInt(e.target.value);

                    d[editComp] = oj;
                    setRenderedData(d);
                  }}
                />
              </div>
              <div className="border-y border-blue-200 px-5 py-2">
                <p>Text Color</p>
                <input
                  type="text"
                  value={
                    renderedData[editComp]?.style?.color == undefined
                      ? ""
                      : renderedData[editComp]?.style?.color
                  }
                  className="border rounded px-3 py-1 bg-blue-300 mt-1 w-full"
                  onChange={(e) => {
                    const d = JSON.parse(JSON.stringify(renderedData));
                    d[editComp].style.color = e.target.value;
                    setRenderedData(d);
                  }}
                />
              </div>
              <div className="border-y border-blue-200 px-5 py-2">
                <p>Background Color</p>
                <input
                  type="text"
                  value={
                    renderedData[editComp]?.style?.backgroundColor == undefined
                      ? ""
                      : renderedData[editComp]?.style?.backgroundColor
                  }
                  className="border rounded px-3 py-1 bg-blue-300 mt-1 w-full"
                  onChange={(e) => {
                    const d = JSON.parse(JSON.stringify(renderedData));
                    d[editComp].style.backgroundColor = e.target.value;
                    setRenderedData(d);
                  }}
                />
              </div>
              <div className="border-y border-blue-200 px-5 py-2">
                <p>On Click</p>
                <input
                  type="text"
                  value={renderedData[editComp]?.onClick}
                  className="border rounded px-3 py-1 bg-blue-300 mt-1 w-full"
                  onChange={(e) => {
                    const d = JSON.parse(JSON.stringify(renderedData));
                    d[editComp].onClick = e.target.value;
                    setRenderedData(d);
                  }}
                />
              </div>
              <div className="border-y border-blue-200 px-5 py-2">
                <p>Padding</p>
                <div className="grid grid-flow-row grid-cols-4 gap-0">
                  <p>Top</p>
                  <p>Left</p>
                  <p>Right</p>
                  <p>Bottom</p>
                  <input
                    type="number"
                    placeholder="top"
                    value={renderedData[editComp]?.onClick}
                    className="border rounded px-3 py-1 bg-blue-300 mt-1 block mr-2"
                    onChange={(e) => {
                      const d = JSON.parse(JSON.stringify(renderedData));
                      d[editComp].onClick = e.target.value;
                      setRenderedData(d);
                    }}
                  />
                  <input
                    type="number"
                    placeholder="left"
                    value={renderedData[editComp]?.onClick}
                    className="border rounded px-3 py-1 bg-blue-300 mt-1 block mr-2"
                    onChange={(e) => {
                      const d = JSON.parse(JSON.stringify(renderedData));
                      d[editComp].onClick = e.target.value;
                      setRenderedData(d);
                    }}
                  />
                  <input
                    type="number"
                    placeholder="right"
                    value={renderedData[editComp]?.onClick}
                    className="border rounded px-3 py-1 bg-blue-300 mt-1 block mr-2"
                    onChange={(e) => {
                      const d = JSON.parse(JSON.stringify(renderedData));
                      d[editComp].onClick = e.target.value;
                      setRenderedData(d);
                    }}
                  />
                  <input
                    type="number"
                    placeholder="bottom"
                    value={renderedData[editComp]?.onClick}
                    className="border rounded px-3 py-1 bg-blue-300 mt-1 block"
                    onChange={(e) => {
                      const d = JSON.parse(JSON.stringify(renderedData));
                      d[editComp].onClick = e.target.value;
                      setRenderedData(d);
                    }}
                  />
                </div>
              </div>
              <div className="border-y border-blue-200 px-5 py-2">
                <p>Margin</p>
                <input
                  type="number"
                  value={renderedData[editComp]?.onClick}
                  className="border rounded px-3 py-1 bg-blue-300 mt-1 w-full"
                  onChange={(e) => {
                    const d = JSON.parse(JSON.stringify(renderedData));
                    d[editComp].onClick = e.target.value;
                    setRenderedData(d);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </DndContext>
    </div>
  );

  function handleDragStart({ active }: any) {
    setSelected(active.id);
  }

  function handleDragEnd({ over, active }: any) {
    setParent(over ? over.id : null);
    if (over == null) {
      return;
    }

    const rendarDatas = JSON.parse(JSON.stringify(renderedData));

    let dataToPush = {};

    if (active.id == "text") {
      dataToPush = {
        tag: "text",
        value: "Hello",
        style: {
          fontSize: 14,
          color: "#000000",
        },
      };
    } else if (active.id == "button") {
      dataToPush = {
        tag: "button",
        value: "Button",
        style: {
          fontSize: 14,
          color: "#000000",
          backgroundColor: "blue",
        },
        onClick: () => {},
      };
    } else if (active.id == "view") {
      dataToPush = {
        tag: "view",
        value: "View",
        style: {
          fontSize: 14,
          color: "#000000",
        },
      };
    }

    rendarDatas.push(dataToPush);

    setRenderedData(rendarDatas);
    // setRenderedData("<div><p>Data</p></div>");
  }
};

export default ProjectEdit;
