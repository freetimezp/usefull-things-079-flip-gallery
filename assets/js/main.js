
const gallery = document.querySelector(".gallery");
const imgPreview = document.querySelector(".imgPreview");
const imgs = document.querySelectorAll(".imgContainer");

let isImgPreviewOpen = false;
let activeImg = null;
let activeImgParent = null;

imgs.forEach((img) => {
    let theImgMask = img.querySelector(".wrap");
    let theImg = img.querySelector("img");

    img.addEventListener("click", () => {
        const imgState = Flip.getState([theImgMask, theImg]);

        gsap.set(imgPreview, { autoAlpha: 1 });
        activeImg = theImgMask;
        activeImgImg = theImgMask.querySelector("img");
        activeImgParent = theImgMask.parentNode;
        imgPreview.appendChild(theImgMask);

        Flip.from(imgState, {
            duration: 1,
            ease: "power3.inOut",
            scale: true,
            onStart: () => {
                imgPreview.classList.add("imgPreview--active");
            },
            onComplete: () => {
                isImgPreviewOpen = true;
            }
        });
    });
});


imgPreview.addEventListener("click", function (e) {
    const activeimgState = Flip.getState([activeImg, activeImgImg]);

    activeImgParent.appendChild(activeImg);

    Flip.from(activeimgState, {
        duration: 1,
        ease: "power3.inOut",
        absolute: true,
        scale: true,
        zIndex: 2000,
        nested: true,
        onStart: () => {
            imgPreview.classList.remove("imgPreview--active");
        },
        onComplete: () => {
            isImgPreviewOpen = false;
            gsap.set(imgPreview, { autoAlpha: 0 });
        }
    });
});























