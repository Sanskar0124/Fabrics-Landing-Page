import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import { data } from "../../utils/accordion.jsx";
import "./Upholstery.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Upholstery = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}

        {/* right */}
        <div className="flexColStart v-left">
          <span className="orangeText">Introducing Upholstery Excellence</span>

          <span className="primaryText">Tailored for You</span>

          <span className="secondaryText">
            Unveil our dedication to superior craftsmanship through fabrics curated to suit your every requirement.
            <br />
            Immerse yourself in the transformative essence of premium textiles, elevating your living space and enriching your lifestyle.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton ">
                      {/* just for getting state of item */}
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span
                        className="primaryText"
                      >
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>


        <div className="v-right">
          <div className="image-container">
            <img src="https://github.com/Sanskar0124/Fabrics-Landing-Page/blob/master/assets/images/fabrics/COVER%20IMAGE-18.png?raw=true" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upholstery;
