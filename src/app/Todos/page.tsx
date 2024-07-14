import HeaderTitle from "@/components/HeaderTitle";
import TodoCard from "@/components/TodoCard";

export default function page() {
  return (
    <>
      <HeaderTitle text="Todos" />
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        <TodoCard name={"todo"} data={[]} />
        <TodoCard name={"in progress"} data={[]} />
        <TodoCard name={"done"} data={[]} />
      </div>
    </>
  );
}
