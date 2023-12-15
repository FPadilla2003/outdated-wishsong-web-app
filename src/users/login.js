import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Nav from "../menus/nav";
import Footer from "../menus/footer";

function LoginPage() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const login = async () => {
        await client.login(credentials);
        navigate("/profile");
    };
    return (
        <div className='d-flex flex-column justify-content-between vh-100'>
            <Nav />
            <Row className="bottom-half flex-grow-1">
                <Col xs="12">
                    <h1>Login</h1>
                    <input className="form-control" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                    <input className="form-control" type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                    <button onClick={login} className="btn btn-primary"> Login </button>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}
export default LoginPage;