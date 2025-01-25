import Bar from "./Bar";

const People = () => {
  return (
    <section className="hidden lg:flex h-screen flex-col max-h-screen space-y-2 items-center bg-white p-2 rounded-xl overflow-y-scroll relative">
      <Bar
        name="Jane Smith"
        message="Hey, how's it going?"
        time="10:30 AM"
        notifications={99}
      />
      <Bar
        name="Jane Smith"
        message="Hey, how's it going?"
        time="10:30 AM"
        notifications={1}
      />
      
    </section>
  );
};

export default People;
