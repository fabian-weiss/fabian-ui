/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import "./timeline.css";

function Timeline() {
  const [lineProgress, setLineProgress] = useState<number>(0);
  const [sectionTop, setSectionTop] = useState(0); // Store the section's top position
  const [sectionHeight, setSectionHeight] = useState(0); // Store the section's top position

  useEffect(() => {
    const sectionElement = document.querySelector(".fw-timeline-container");
    if (sectionElement instanceof HTMLDivElement) {
      const rect = sectionElement.getBoundingClientRect();
      setSectionTop(rect.top + window.scrollY); // Get the top position of the section
      setSectionHeight(rect.height);
    }

    const handleScroll = () => {
      // Check if the section is in the view
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      console.log(
        `scrollY: ${scrollY}, windowHeight: ${windowHeight}, sectionTop: ${sectionTop}, sectionHeight: ${sectionHeight}`
      );
      //   const sectionContainer = document.querySelector(".fw-timeline-container");

      // Check if the section is in the viewport and if the user has scrolled past the threshold
      //   if (scrollY > sectionTop) {
      //     const progressPercent = Math.min(
      //       ((scrollY - sectionTop) / (sectionHeight / 4)) * 100, // Calculate the progress based on scroll position: ;
      //       100
      //     );
      //     console.log(`set progress to ${progressPercent}`);
      //     setLineProgress(progressPercent);
      //   } else {
      //     console.log(`set progress to 0`);
      //     setLineProgress(0);
      //   }
      const offset = windowHeight / 2;
      if (scrollY + offset > sectionTop) {
        const progressPercent = Math.min(
          ((scrollY - sectionTop + offset) / sectionHeight) * 100, // Calculate the progress based on scroll position: ;
          100
        );
        console.log(`set progress to ${progressPercent}`);
        setLineProgress(progressPercent);
      } else {
        console.log(`set progress to 0`);
        setLineProgress(0);
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionTop]);
  return (
    <div className="fw-timeline-container">
      <div className="fw-timeline-content-wrapper">
        <div className="fw-timeline-line-wrapper">
          <div className="fw-timeline-line">
            <div
              style={{ height: `${lineProgress}%` }}
              className="fw-timeline-progress-line"
            ></div>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2001</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Beginn der Entwicklung
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2004</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Erste Superpremium-Trockenfutterlinie für Hunde mit 7 Rezepten
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2005</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Nassfutterlinie für Welpen und erwachsene Hunde aus Schweine- und
              Rindfleisch
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2006</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Erweiterung der Superpremium-Trockenfutterlinie für Hunde um 4
              neue Produkte
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2008</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Die ersten beiden Zahnsnacks für Hunde
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2009</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">Neues Logo</h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2009</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              4 neue Superpremium-Trockenfutterrezepte für Hunde (insgesamt 15)
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2010</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              erste Premium-Trockenfutterlinie für Hunde mit 5 Rezepten
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2011</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              neue Linie von Fleisch- und Zahnleckereien Joy
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2012</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Superpremium-Trockenfutterlinie für Katzen
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2013</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Fleischsnacks für Katzen und neue Fleisch- und Zahnsnacks für
              Hunde
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2013</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Neue Premium-Trockenfutterlinie für Hunde mit 6 Rezepturen
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2014</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Premium-Linie aus Nassfutter für Hunde und Katzenbeuteln
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2015</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Trockenfutter für Hunde und Katzen aus der Veterinärmedizin
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2016</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Superpremium-Dosenfutterlinie für Hunde und Katzen
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2016</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Neue Superpremium-Linie für Hunde und Katzen
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2016</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Nassfutter zum Veterinärdiäten
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2017</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Neue Premium-Trockenfutterlinie für Hunde
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2018</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Neue Rezepte für Veterinärdiäten
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2018</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              neue Nassfutterlinie Dog Premium Line
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2019</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Neues Sortiment - Leckerlis für Katzen
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2019</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              Erfrischung mit Joy-Leckereien
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2020</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              neue Expert Nutrition-Linie für Hunde
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2020</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              neue hypoallergene Life-Linie für Hunde
            </h6>
          </div>
        </div>
        <div className="fw-timeline-entry">
          <div className="fw-timeline-year-container">
            <div className="fw-timeline-year">2020</div>
          </div>
          <div className="fw-timeline-entry-content-wrapper">
            <img
              src="https://gravity.zenit.design/media/bf/18/18/1642143060/food-and-drinks.webp?ts=1717507216"
              alt=""
              className="fw-timeline-entry-image"
            />
            <h6 className="fw-timeline-entry-description">
              neue Verve-Linie mit Frischfleisch für Katzen
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
