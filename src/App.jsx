import { useState } from "react"

function App() {

    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [experienceYears, setExperienceYears] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (
            !fullName.trim() ||
            !username.trim() ||
            !password.trim() ||
            !specialization.trim() ||
            !experienceYears.trim() ||
            experienceYears <= 0 ||
            !description.trim()
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
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)} />
                </label>
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <p>Specialization</p>
                    <select
                        value={specialization}
                        onChange={e => setSpecialization(e.target.value)}>
                        <option value="Full Stack">Full Stack</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                    </select>
                </label>
                <label>
                    <p>Experience Years</p>
                    <input
                        type="number"
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)} />
                </label>
                <label>
                    <p>Descritpion</p>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App
