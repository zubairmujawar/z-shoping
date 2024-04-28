import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useContext, useState } from "react";
import myContext from "../../context/mycontext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const Signup = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // useNavigate to navigate user to home page after SignUp
  const navigate = useNavigate();

  // user SingUp initail state
  const [userSignup, setuserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  // user SingUp function
  const userSignupFunction = async () => {
    // validation
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // create user Refrence
      const userRefrence = collection(fireDB, "user");

      // Add User Detail
      addDoc(userRefrence, user);

      setuserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully");

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen shadow-2xl">
        {loading && <Loader />}
        {/* signup Form  */}
        <div className="login_Form bg-orange-50 px-1 lg:px-8 py-6 border border-orange-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-orange-500 ">
              Signup
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Full Name"
              value={userSignup.name}
              onChange={(e) =>
                setuserSignup({ ...userSignup, name: e.target.value })
              }
              className="bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email Address"
              value={userSignup.email}
              onChange={(e) =>
                setuserSignup({ ...userSignup, email: e.target.value })
              }
              className="bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              value={userSignup.password}
              onChange={(e) =>
                setuserSignup({ ...userSignup, password: e.target.value })
              }
              className="bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200"
            />
          </div>

          {/* Signup Button  */}
          <div className="mb-5">
            <button
              type="button"
              onClick={userSignupFunction}
              className="bg-orange-500 hover:bg-orange-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Signup
            </button>
          </div>

          <div>
            <h2 className="text-black">
              Have an account?{" "}
              <Link
                className=" text-orange-500 font-bold underline"
                to={"/login"}
              >
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
