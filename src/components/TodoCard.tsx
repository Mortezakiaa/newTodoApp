"use client";
import useUpdateTodo from "@/hooks/useUpdateTodo";
import { TTodoCard } from "@/Types/Types";
import { RiTodoLine } from "react-icons/ri";

const TodoCard: React.FC<TTodoCard> = ({ name, data }) => {
  const { setStatus, DragEnd, DragOver } = useUpdateTodo();

  return (
    <div className="w-full p-6 md:w-1/2 xl:w-1/3" data-status={name}>
      <div
        data-status={name}
        className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100"
      >
        <h2 className="font-bold text-gray-600 uppercase">{name}</h2>
      </div>
      <div
        className="flex pt-1 flex-col gap-2 min-h-10 bg-stone-300 p-1"
        data-status={name}
        onDragEnter={(e) => {
          console.log("e", e.target.getAttribute("data-status"));
          setStatus(e.target.getAttribute("data-status"));
        }}
        onDrop={(e) => {
          console.log("d", e.target.getAttribute("data-status"));
          // setStatus(e.target.getAttribute("data-status"));
        }}
        onDragOver={DragOver}
      >
        {data?.map((item) => {
          if (item.status === name) {
            return (
              <div
                data-status={name}
                draggable
                onDragEnd={() => {
                  DragEnd(item);
                }}
                className="bg-white p-2 border-transparent rounded-lg shadow-xl"
                key={item._id}
              >
                <div className="flex gap-2 items-center">
                  <RiTodoLine />
                  <h2 className="break-all">{item.title}</h2>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodoCard;
