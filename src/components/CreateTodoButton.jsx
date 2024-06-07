export function CreateTodoButton({ setOpenModal }) {
  return (
    <>
      <button onClick={() => setOpenModal((state) => !state)}>+</button>
    </>
  );
}
