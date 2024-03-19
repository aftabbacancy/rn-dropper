"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";

// const Picture = dynamic(() => import('@/components/Picture'), {
//     ssr: false,
//   });

const PictureList = [
  {
    id: 1,
    url: "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s",
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
  },
];

// const DragDrop = () => {
//   const [board, setBoard] = useState<any>([]);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "image",
//     drop: (item:any) => addImageToBoard(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   const addImageToBoard = (id:any) => {
//     const pictureList = PictureList.filter((picture) => id === picture.id);
//     setBoard((board:any) => [...board, pictureList[0]]);
//   };
//   return (
//     <>
//       <div className="Pictures">
//         {PictureList.map((picture, index) => {
//           return <Picture url={picture.url} id={picture.id} key={index} />;
//         })}
//       </div>
//       <div className="Board" ref={drop}>
//         {board.map((picture:any, index:number) => {
//           return <Picture url={picture.url} id={picture.id} key={index} />;
//         })}
//       </div>
//     </>
//   );
// }

const DragDrop = () => {
  const [board, setBoard] = useState<any>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item: any) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id: any) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board: any) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture, index) => {
          return <Picture url={picture.url} id={picture.id} key={index} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture: any, index: number) => {
          return <Picture url={picture.url} id={picture.id} key={index} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
