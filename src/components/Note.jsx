import React from "react";

export const Note = () => {
  return (
    <div className="containerr -50 flex h-[100vh]  items-center overflow-hidden bg-zinc-900 py-32 dark:bg-zinc-50 ">
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />

        <div className="container">
          <div className="card">
            <figure className="card__thumb">
              <img
                src="https://source.unsplash.com/75S9fpDJVdo/300x510"
                alt="Picture by Kyle Cottrell"
                className="card__image"
              />
              <figcaption className="card__caption">
                <h2 className="card__title">
                  NASA Has Found Hundreds Of Potential New Planets
                </h2>
                <p className="">
                  NASA released a list of 219 new “planet candidates” discovered
                  by the Kepler space telescope, 10 of which are similar to
                  Earth’s size and may be habitable by other life forms.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
