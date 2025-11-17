import UiInput from "@/components/UiInput";

export default () => {
  return (
    <section>
      <div className="w-full max-w-lg mx-auto">
        <h2 className="font-bold text-3xl mb-10">Setting For Home Section</h2>
        <form action="" encType="multipart/form-data" className="space-y-5">
          <UiInput id="achive" label="Achive" type="textarea" />
          <UiInput id="subtitle" label="Subtitle" type="textarea" />
          <UiInput id="image" label="Image" type="file" />
          <button
            type="submit"
            className="px-4 py-1 bg-blue-400 text-white font-bold block w-fit ml-auto rounded">
            Save Change
          </button>
        </form>
      </div>
    </section>
  );
};
