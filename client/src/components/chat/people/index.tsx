import Bar from "./Bar";

const People = () => {
  return (
    <section className="hidden lg:flex flex-col space-y-2  items-center bg-white p-2 rounded-xl overflow-auto">
      <Bar
        name="Jane Smith"
        message="Hey, how's it going?"
        time="10:30 AM"
        notifications={5}
      />
    </section>
  );
};

export default People;
