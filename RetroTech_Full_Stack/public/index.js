const inputField = document.getElementById("email-input");

const subBtn = document.getElementById("sub-btn");

const message = document.getElementById("message");

if (subBtn) {

    subBtn.addEventListener("click", async (e) => {

        e.preventDefault();

        try {

            const response = await fetch("/sub", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email: inputField.value
                }),
            });

            const data = await response.json();

            console.log(data);

            message.textContent = "Subscribed Successfully!";

            inputField.value = "";

        } catch (error) {

            message.textContent = "Serious ghouls! Please try again.";

            console.error("Error:", error);
        }
    });
}