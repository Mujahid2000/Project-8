import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div className="max-w-[1600px] max-h-[600px] px-5">
        <nav className="flex flex-col gap-8 items-center md:flex-row justify-between mt-12 ">
          <div>
            <img src="https://i.ibb.co/TqnfPhD/Logo.png" alt="" />
          </div>
          <div>
            <ul className="flex justify-evenly gap-10">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "text-red-500 underline"
                        : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "text-red-500 underline"
                        : ""
                  }
                >
                  Donation
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "text-red-500 underline"
                        : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;
