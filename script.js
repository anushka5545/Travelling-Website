/* ==========================================
   WANDERLY TRAVEL WEBSITE
   JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("show");
}


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu").classList.remove("show");

    });

});


/* ==========================================
   DESTINATION DATA
========================================== */

const destinations = {

    "Manali": {
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
        description:
            "Manali is a beautiful mountain destination in Himachal Pradesh. Enjoy snow-covered mountains, peaceful valleys, trekking, adventure activities and stunning natural scenery.",
        rating: "4.8",
        price: "₹15,000"
    },

    "Goa": {
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
        description:
            "Goa is famous for its beautiful beaches, Portuguese architecture, delicious food and exciting nightlife. It is perfect for both relaxation and adventure.",
        rating: "4.7",
        price: "₹12,000"
    },

    "Bali": {
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
        description:
            "Bali offers tropical beaches, ancient temples, green rice terraces and unforgettable sunsets. Experience Indonesian culture and beautiful island landscapes.",
        rating: "4.9",
        price: "₹35,000"
    },

    "Paris": {
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
        description:
            "Paris is the city of art, fashion and romance. Visit the Eiffel Tower, Louvre Museum, charming streets and enjoy authentic French cuisine.",
        rating: "4.8",
        price: "₹70,000"
    },

    "Maldives": {
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
        description:
            "The Maldives is a tropical paradise known for crystal-clear waters, white-sand beaches, luxury resorts and incredible marine life.",
        rating: "4.9",
        price: "₹55,000"
    },

    "Dubai": {
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
        description:
            "Dubai combines modern architecture, luxury shopping, desert adventures and world-class entertainment. Explore the Burj Khalifa and experience the Arabian desert.",
        rating: "4.8",
        price: "₹45,000"
    }

};


/* ==========================================
   FILTER DESTINATIONS
========================================== */

function filterDestinations(category, button) {

    const cards =
        document.querySelectorAll(".destination-card");

    const filters =
        document.querySelectorAll(".filter");


    filters.forEach(filter => {

        filter.classList.remove("active");

    });


    button.classList.add("active");


    cards.forEach(card => {

        const cardCategory =
            card.getAttribute("data-category");


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ==========================================
   DESTINATION DETAILS
========================================== */

function showDetails(destinationName) {

    const destination =
        destinations[destinationName];


    if (!destination) {

        return;

    }


    document.getElementById("modalTitle").textContent =
        destinationName;


    document.getElementById("modalImage").src =
        destination.image;


    document.getElementById("modalDescription").textContent =
        destination.description;


    document.getElementById("modalRating").textContent =
        destination.rating;


    document.getElementById("modalPrice").textContent =
        destination.price;


    document.getElementById("detailsModal")
        .classList.add("show");


    document.body.style.overflow = "hidden";

}


/* ==========================================
   BOOKING MODAL
========================================== */

function openBooking() {

    document.getElementById("bookingModal")
        .classList.add("show");


    document.body.style.overflow = "hidden";

}


function closeModal(modalId) {

    const modal =
        document.getElementById(modalId);


    if (modal) {

        modal.classList.remove("show");

    }


    document.body.style.overflow = "auto";

}


/* ==========================================
   SEARCH DESTINATION
========================================== */

function searchDestination() {

    const searchInput =
        document.getElementById("searchInput");


    if (!searchInput) {

        return;

    }


    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();


    if (searchValue === "") {

        showToast("Please enter a destination.");

        return;

    }


    const cards =
        document.querySelectorAll(".destination-card");


    let found = false;


    cards.forEach(card => {

        const dataName =
            card.getAttribute("data-name");


        if (!dataName) {

            return;

        }


        const name =
            dataName.toLowerCase();


        if (name.includes(searchValue)) {

            card.style.display = "block";


            if (!found) {

                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


                card.style.transform =
                    "scale(1.03)";


                setTimeout(() => {

                    card.style.transform = "";

                }, 1000);

            }


            found = true;

        } else {

            card.style.display = "none";

        }

    });


    if (!found) {

        showToast(
            "Destination not found. Try Manali, Goa, Bali, Paris, Maldives or Dubai."
        );

    }

}


/* ==========================================
   ENTER KEY SEARCH
========================================== */

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "keypress",
        function (event) {

            if (event.key === "Enter") {

                searchDestination();

            }

        }
    );

}


/* ==========================================
   BOOKING FORM
========================================== */

function submitBooking(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const destination =
        document.getElementById("destination").value;


    showToast(
        `Thank you ${name}! Your trip request for ${destination} has been received.`
    );


    document.getElementById("bookingForm").reset();


    setTimeout(() => {

        closeModal("bookingModal");

    }, 1800);

}


/* ==========================================
   TOAST MESSAGE
========================================== */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    const toastMessage =
        document.getElementById("toastMessage");


    if (!toast || !toastMessage) {

        return;

    }


    toastMessage.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 4000);

}


/* ==========================================
   SET MINIMUM TRAVEL DATE
========================================== */

const today =
    new Date()
        .toISOString()
        .split("T")[0];


const travelDate =
    document.getElementById("travelDate");


const bookingDate =
    document.getElementById("bookingDate");


if (travelDate) {

    travelDate.setAttribute("min", today);

}


if (bookingDate) {

    bookingDate.setAttribute("min", today);

}


/* ==========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================== */

window.addEventListener("click", function (event) {

    const detailsModal =
        document.getElementById("detailsModal");


    const bookingModal =
        document.getElementById("bookingModal");


    if (
        detailsModal &&
        event.target === detailsModal
    ) {

        closeModal("detailsModal");

    }


    if (
        bookingModal &&
        event.target === bookingModal
    ) {

        closeModal("bookingModal");

    }

});


/* ==========================================
   ESCAPE KEY CLOSE
========================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal("detailsModal");

        closeModal("bookingModal");

    }

});


/* ==========================================
   NAVBAR SHADOW ON SCROLL
========================================== */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");


    if (!navbar) {

        return;

    }


    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.12)";

    } else {

        navbar.style.boxShadow =
            "0 3px 20px rgba(0,0,0,0.06)";

    }

});