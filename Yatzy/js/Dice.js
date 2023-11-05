
class Dice
{
    constructor(number = null, element)
    {
        this.prevRotate = 0;
        this.number = number;
        this.isActive = true;

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

    reset()
    {
        this.isActive = true;
        this.imgEl.classList.remove('blur');
        this.number = 1;
        this.#setImg();
        this.number = null;
        this.imgEl.style.transform = 'rotate(0deg)';
    }

    #setImg()//private
    {
        this.imgEl.setAttribute('src', 'Dice/'+this.number+'_face.png');
    }

    #animateDice()
    {
        this.prevRotate = (this.prevRotate += this.seed) % 360;

        this.imgEl.style.transform = 'rotate('+ this.prevRotate+ 'deg)';
    }

}