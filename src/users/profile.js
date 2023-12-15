import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Nav from "../menus/nav";
import Footer from "../menus/footer";

function Profile() {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const signout = async () => {
        await client.signout();
        navigate("/login");
    };
    const save = async () => {
        await client.updateUser(profile);
    };
    const fetchProfile = async () => {
        const profile = await client.profile();
        setProfile(profile);
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    return (

        <div className='d-flex flex-column justify-content-between vh-100'>
            <Nav />
            <Row className="bottom-half flex-grow-1">
                <Col xs="12">
                    <div className="w-50">
                        <h1>Profile</h1>
                        {profile && (
                            <div>
                                <input className="form-control"
                                    value={profile.password}
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        password: e.target.value
                                    })} />
                                <input className="form-control"
                                    value={profile.firstName}
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        firstName: e.target.value
                                    })} />
                                <input className="form-control"
                                    value={profile.lastName}
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        lastName: e.target.value
                                    })} />
                                <input className="form-control"
                                    value={profile.dob}
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        dob: e.target.value
                                    })} />
                                <input className="form-control"
                                    value={profile.email}
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        email: e.target.value
                                    })} />
                                <select className="form-select"
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        role: e.target.value
                                    })}>
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                        )}
                        <button className="btn btn-primary w-100" onClick={save}>
                            Save
                        </button>
                        <button className="btn btn-danger w-100" onClick={signout}>
                            Signout
                        </button>
                    </div>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}
export default Profile;