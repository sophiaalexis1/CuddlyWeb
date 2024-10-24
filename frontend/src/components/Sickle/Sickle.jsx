import { useEffect } from 'react';
import './Sickle.css';

const Sickle = () => {


    return (
        <div>
            <br />
            <h2>What is Sickle Cell Anemia?</h2>
            <br />
            <div className='sickle'>
            <p>
                Sickle cell anemia, often simply referred to as sickle cell disease (SCD), is a genetic disorder that affects the red blood cells in the body. It is a type of hemoglobinopathy, which means it involves abnormalities in hemoglobin, the protein in red blood cells that carries oxygen throughout the body. Sickle cell anemia is one of the most common inherited blood disorders and is particularly prevalent among people of African, Mediterranean, Middle Eastern, and Indian descent.

                The primary characteristic of sickle cell anemia is the presence of abnormal hemoglobin called hemoglobin S (HbS). Under certain conditions, such as low oxygen levels, dehydration, or high stress, the HbS molecules can form long, rigid structures within the red blood cells, causing these cells to become misshapen and take on a "sickle" or crescent shape instead of their usual round shape. These abnormally shaped cells can block blood flow in small blood vessels, leading to various complications.

                Some common complications and symptoms of sickle cell anemia include:
            </p>
            <br />
            <ul className='list'>

                <li> 1. Pain Crises: These are episodes of severe, debilitating pain that occur when the sickle-shaped cells block blood flow and oxygen delivery to tissues. </li>

                <li> 2. Anemia: Sickle cell anemia can lead to chronic anemia, as the misshapen red blood cells are fragile and easily broken, resulting in a reduced oxygen-carrying capacity of the blood. </li>

                <li> 3. Organ Damage: Repeated blockages of blood flow can cause damage to various organs, including the spleen, kidneys, lungs, and brain. </li>

                <li> 4. Increased Infection Risk: Individuals with sickle cell anemia are more susceptible to infections, particularly those caused by bacteria like Streptococcus pneumoniae. </li>

                <li> 5. Stroke: Blocked blood vessels can lead to strokes, particularly in children with the disease. </li>

                <li> 6. Jaundice: Sickle cell anemia can cause the breakdown of red blood cells, leading to a buildup of bilirubin in the bloodstream and jaundice (yellowing of the skin and eyes). </li>
            </ul>
            <br />
            <p>
                Sickle cell anemia is a lifelong condition that requires ongoing medical management. Treatment may involve pain management during crises, blood transfusions to alleviate anemia, and medications to reduce complications and improve overall quality of life. Stem cell transplantation is a curative option for some individuals, but it carries significant risks and is generally reserved for severe cases.

                Early diagnosis through newborn screening and comprehensive medical care can help individuals with sickle cell anemia lead relatively normal lives and manage their condition effectively. Additionally, ongoing research into gene therapy and other treatments offers hope for improved outcomes and potentially even a cure in the future.
            </p>
            </div>
            <br />
            <br />
        </div>
    );
};

export default Sickle;