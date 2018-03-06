# Wes Bos JavaScript 30

30 fun warm-ups - **just** js, css & html


##Markedown fun

_italics_ and **bold** use 1 or 2 _ *'s ~~strike thru~~

[This shows](http://thisUrl.com "with this tooltip")
// tooltip not working

[Course list][1]  // link using footnote


here is some code:

    ``` 
    const inputs = document.querySelectorAll('.controls input');
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
    ```
    



![Picture][pic1]



[1]: https://courses.wesbos.com
[pic1]: http://unsplash.it/500/500?image=1012

Photo by Sticker Mule on Unsplash
---

hr

<hr>


------


Ul
* list item
* list item
    * indented
* list item

ol
1. step x
1. step x
    * x.a
    * x.b
    
1. step x
