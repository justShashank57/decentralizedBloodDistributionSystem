import "./showReq.css";

// Helper function to generate random dates
const getRandomDate = (start, end) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

// Helper function to get a random element from an array
const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const generatePosts = (numPosts) => {
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const locations = [
    "Maharashtra, Pune",
    "Delhi, Delhi",
    "Karnataka, Bangalore",
    "Tamil Nadu, Chennai",
    "West Bengal, Kolkata",
  ];

  const posts = [];
  for (let i = 0; i < numPosts; i++) {
    posts.push({
      bloodType: getRandomElement(bloodTypes),
      location: getRandomElement(locations),
      dueDate: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    });
  }
  return posts;
};

export const ShowRequestPost = () => {
  const posts = generatePosts(20); // Generate 20 random posts

  return (
    <>
      <div className="curPost">
        <section className="warning">
          <span style={{ marginRight: "5px" }}>Warning:</span>{" "}
          <marquee behavior="scroll" direction="left" scrollamount="3">
            {" "}
            Do not pay any amount to any person promising supply of blood
            packets or arranging donors.
          </marquee>
        </section>
        <hr />
        <section className="postList">
          <p style={{ textAlign: "center" }}>
            BLOOD REQUESTS <hr />
          </p>
          <div className="p_list">
            {posts.map((post, index) => (
              <div className="singlePost" key={index}>
                <section id="b_type">{post.bloodType}</section>
                <section id="b_details">
                  {post.location} <br /> <span>Due: {post.dueDate}</span>
                </section>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
