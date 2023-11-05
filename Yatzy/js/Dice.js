
class Dice
{
    constructor(number = null, element)
    {
        this.prevRotate = 0;
        this.number = number;
        this.isActive = true;

        //this number is the base amount that the image element representing the dice will be rotated at.
        //more info in the animate method
        this.seed = 120 + Math.floor(Math.random() * 240);

        this.imgEl = document.getElementById(element);

        this.imgEl.onclick = (event) =>
        {
            this.isActive = !this.isActive;
            if(!this.isActive)
                this.imgEl.classList.add('blur');
            else
                this.imgEl.classList.remove('blur');
        }
    }

    getNumber()
    {
        return this.number;
    }

    roll()
    {

        if(this.isActive)
        {
            this.#animateDice();
            this.number = Math.floor(Math.random() * 6) + 1;
            this.#setImg();
        }

    }

    setNumber(newNumber)
    {

        if(newNumber < 1 || newNumber > 6)
            return;

        if(this.isActive)
        {
            this.#animateDice();
            this.number = newNumber;
            this.#setImg();
        }
    }

    /** 
    * sets the dice to a "neutral" state to make sure that it is ready to be used again
    */
    reset()
    {
        this.isActive = true;
        this.imgEl.classList.remove('blur');
        this.number = 1;
        this.#setImg();
        this.number = null;
        this.imgEl.style.transform = 'rotate(0deg)';
    }

    /**
    *sets the image that should be showing based on the rolled number
    */
    #setImg()//private
    {
        this.imgEl.setAttribute('src', 'Dice/'+this.number+'_face.png');
    }

    /**
        rotates the image element using css, giving us our animation
    */
    #animateDice()
    {
        //uses a instance variable to make sure that the dice will always roll a minimum amount
        //it takes previous number, then adds the seed amount, and sets the number lower than 360
        //this step also makes it so that the dice sometimes roll the other direction, which is nice
        this.prevRotate = (this.prevRotate += this.seed) % 360;

        this.imgEl.style.transform = 'rotate('+ this.prevRotate+ 'deg)';
    }

}
