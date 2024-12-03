document.getElementById("auth-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Perform normal login using email and password (e.g., call API or backend)
    console.log("Logging in with:", email, password);
});

document.getElementById("fingerprint-btn").addEventListener("click", async function() {
    if (window.PublicKeyCredential) {
        try {
            const credential = await navigator.credentials.get({
                publicKey: {
                    challenge: new Uint8Array([/* server-generated challenge */]),
                    allowCredentials: [
                        {
                            type: "public-key",
                            id: new Uint8Array([/* user’s public key credential ID */]),
                        }
                    ],
                    userVerification: "required",
                },
            });
            console.log("Fingerprint authentication successful:", credential);
            // Continue with the login process after fingerprint authentication
        } catch (error) {
            console.error("Fingerprint authentication failed:", error);
        }
    } else {
        alert("Fingerprint authentication is not supported on this device.");
    }
});

function switchToSignup() {
    document.getElementById("form-title").textContent = "Sign Up";
    document.getElementById("auth-form").reset();
    // Modify the form to handle signup (add extra fields if necessary)
    document.getElementById("signup-option").innerHTML = '<p>Already have an account? <a href="#" onclick="switchToLogin()">Login</a></p>';
}

function switchToLogin() {
    document.getElementById("form-title").textContent = "Login";
    document.getElementById("auth-form").reset();
    document.getElementById("signup-option").innerHTML = '<p>Don\'t have an account? <a href="#" onclick="switchToSignup()">Sign Up</a></p>';
}
