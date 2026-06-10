import { useEffect, useMemo, useState, useRef } from "react"

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/\`~`;

function App() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");

    const fullNameRef = useRef();
    const specializationRef = useRef();
    const experienceYearsRef = useRef();

    const isUsernameValid = useMemo(() => {

        const charsValid = [...username].every(char =>
            letters.includes(char.toLowerCase()) ||
            numbers.includes(char)
        );

        return charsValid && [...username].length >= 6;

    }, [username]);

    const isPasswordValid = useMemo(() => {

        return (
            [...password].length >= 8 &&
            [...password].some(char => letters.includes(char)) &&
            [...password].some(char => numbers.includes(char)) &&
            [...password].some(char => symbols.includes(char))
        );

    }, [password]);

    const isDescriptionValid = useMemo(() => {

        return (
            description.trim().length >= 100 &&
            description.trim().length < 1000
        );

    }, [description])

    const handleSubmit = e => {
        e.preventDefault();

        const fullName = fullNameRef.current.value;
        const specialization = specializationRef.current.value;
        const experienceYears = experienceYearsRef.current.value;

        if (
            !fullName.trim() ||
            !username.trim() ||
            !password.trim() ||
            !specialization.trim() ||
            !experienceYears.trim() ||
            experienceYears <= 0 ||
            !description.trim() ||
            !isUsernameValid ||
            !isPasswordValid ||
            !isDescriptionValid
        ) {
            alert("Error: Please fill in all required fields");
            return;
        }
        console.log("Submit successfull", {
            fullName,
            username,
            password,
            specialization,
            experienceYears,
            description
        })
    }

    return (
        <div>
            <h1>Web Developers Portal</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Full Name</p>
                    <input
                        type="text"
                        ref={fullNameRef}
                    />
                </label>
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    {username.trim() && (
                        <p style={{ color: isUsernameValid ? "green" : "red" }}>
                            {isUsernameValid ? "Username is valid" : "Username must have at least 6 characters"}
                        </p>
                    )}
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    {password.trim() && (
                        <p style={{ color: isPasswordValid ? "green" : "red" }}>
                            {isPasswordValid ? "Password is valid" : "Password must have at least 8 characters, a number and a symbol"}
                        </p>
                    )}
                </label>
                <label>
                    <p>Specialization</p>
                    <select
                        ref={specializationRef}
                    >
                        <option value="Full Stack">Full Stack</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                    </select>
                </label>
                <label>
                    <p>Experience Years</p>
                    <input
                        type="number"
                        ref={experienceYearsRef}
                    />
                </label>
                <label>
                    <p>Description</p>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                    {description.trim() && (
                        <p style={{ color: isDescriptionValid ? "green" : "red" }}>
                            {isDescriptionValid ? "Description is valid" : `Description length must be between 100 and 1000 characters (${description.trim().length})`}
                        </p>
                    )}
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App
