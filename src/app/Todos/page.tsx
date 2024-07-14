import HeaderTitle from "@/components/HeaderTitle";
import TodoCard from "@/components/TodoCard";

export default function page() {
  return (
    <>
      <div className="pt-3 bg-gray-800">
        <HeaderTitle text="Todos" />
        <div className="flex flex-row flex-wrap flex-grow mt-2">
          <TodoCard name={"odo"} data={[]} />
          <TodoCard name={"in progress"} data={[]} />
          <TodoCard name={"done"} data={[]} />
        </div>
      </div>
    </>
  );
}
