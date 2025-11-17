export default ({
  label,
  id,
  type,
  cls,
}: {
  label: string;
  id: string;
  type: "text" | "file" | "password" | "number" | "textarea";
  cls?: string;
}) => {
  return (
    <label htmlFor={id} className="w-full flex flex-col gap-1">
      <span>{label}</span>
      {type === "textarea" ? (
        <textarea
          name={id}
          id={id}
          className={`border outline-0 py-1 px-3 rounded resize-none ${cls}`}></textarea>
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className={`border outline-0 py-1 px-3 rounded resize-none ${cls}`}
        />
      )}
    </label>
  );
};
