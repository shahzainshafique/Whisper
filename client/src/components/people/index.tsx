import Bar from "./Bar";

const People = () => {
  return (
    <section className="hidden lg:flex flex-col space-y-2 items-center  bg-white p-2 rounded-xl">
      <Bar
        name="Jane Smith"
        message="Hey, how's it going?"
        time="10:30 AM"
        notifications={5}
      />
      <Bar
        name="Mike Johnson"
        message="Not much, just chillin'"
        time="09:45 AM"
        notifications={null}
      />
      <Bar
        name="Sarah Davis"
        message="Just got out of bed"
        time="07:15 AM"
        notifications={0}
      />
    </section>
  );
};

export default People;
