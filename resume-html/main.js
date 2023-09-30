
let current = null;

function openCloseForm()
{
    let popupContainer = document.getElementById('popup-container');
    let popupForm = document.getElementById('popup-form');

    if(popupContainer.style.visibility == "visible") {
        popupContainer.style.visibility = "hidden";
    }
    else {
        popupContainer.style.visibility = "visible";
    }
}

/**
 * makes the view into a 'blank slate' of sorts
 */
function updateLayout()
{
    document.getElementById('skill-button').style.textDecoration = "none";
    document.getElementById('edu-button').style.textDecoration = "none";
    document.getElementById('exp-button').style.textDecoration = "none";

    document.getElementById('intro-text').style.display = "none";
    document.getElementById('skill-text').style.display = "none";
    document.getElementById('experience-text').style.display = "none";
    document.getElementById('education-text').style.display = "none";
}

/**
 * Sets the view to the requested 'tab' (skills, edu, exp)
 * and then changes the color of the box-shadow of the column
 * @param color
 */
function loadColumn(color)
{
    updateLayout();
    let col = document.getElementById('column');
    let style = "0 0 0.5em "+color;
    col.style.boxShadow = style;

}

/**
 * Sets the view back to the default
 */
function resetColumn()
{
    updateLayout();

    let col = document.getElementById('column');
    col.style.boxShadow = "0 0 0.3em white";
    document.getElementById('intro-text').style.display = "inline";

}



function skillsClick()
{
    let color = getComputedStyle(document.body).getPropertyValue('--skills-color');
    const HTMLContent = 1;
    if(current === "skills") {
        current = null;
        resetColumn();
    }

    else{
        loadColumn(color)
        current = "skills";
        document.getElementById('skill-text').style.display = "inline";
        document.getElementById('skill-button').style.textDecoration = "underline";
        document.getElementById('skill-button').style.textDecorationColor = "white";
    }
}

function experienceClick()
{
    let color = getComputedStyle(document.body).getPropertyValue('--exp-color');


    if(current === "experience"){
        current = null;
        resetColumn();
    }

    else
    {
        loadColumn(color);
        current = "experience";
        document.getElementById('experience-text').style.display = "inline";

        document.getElementById('exp-button').style.textDecoration = "underline";
        document.getElementById('exp-button').style.textDecorationColor = "white";
    }
}

function educationClick()
{
    let color = getComputedStyle(document.body).getPropertyValue('--education-color');

    if(current === "education"){
        current = null;
        resetColumn();
    }

    else
    {
        loadColumn(color);
        current = "education";
        document.getElementById('education-text').style.display = "inline";

        document.getElementById('edu-button').style.textDecoration = "underline";
        document.getElementById('edu-button').style.textDecorationColor = "white";
    }
}
