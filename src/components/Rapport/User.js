import React, { useEffect, useState } from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

function StatUser() {

    const url = "http://localhost:8000/api";
    const [userProfil, setUserProfil] = useState([]);
    const [userCreated, setUserCreated] = useState([]);
    const [userConnected, setUserConnected] = useState([]);


    const fetchStatUserProfil = async () => {
        /*        const response = await fetch(`${url}/users/index`)
               const data = await response.json()
               console.log(data);
       
               setStatUser(data); */

        await fetch(`${url}/users/index`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((json) => {
                console.log(json)
                setUserProfil(json);
            })

        }).catch(error => {
            console.log(error)
        })


    }
    const fetchStatUserCreated = async () => {
        await fetch(`${url}/users/index2`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((json) => {
                setUserCreated(json);
            })

        }).catch(error => {
            console.log(error)
        })


    }

    const fetchStatUserConnected = async () => {
        await fetch(`${url}/users/index3`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((json) => {
                setUserConnected(json);
            })

        }).catch(error => {
            console.log(error)
        })


    }

    useEffect(() => {
        fetchStatUserProfil();
        fetchStatUserCreated();
        fetchStatUserConnected();
    }, [url])

    var dataUserProfil = {
        labels: userProfil.map(u => u.profileName),
        datasets: [{
            label: `Profil`,
            data: userProfil.map(u => u.nbrUsers),
            backgroundColor: [
                'rgba(10, 25, 50, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(80, 80, 120, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(12, 33, 90, 0.6)',
                'rgba(150, 89, 90, 0.6)'],
        }]
    };
    var dataUserCreated = {
        labels: userCreated.map(u => u.DateCreat),
        datasets: [{
            label: `Nombre d'inscriptions par jour`,
            data: userCreated.map(u => u.nbrUsers),
            backgroundColor: [
                'rgba(10, 25, 50, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(80, 80, 120, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(12, 33, 90, 0.6)',
                'rgba(150, 89, 90, 0.6)'
            ],

        }]
    };
    var dataUserConnected = {
        labels: userConnected.map(u => u.DateCreat),
        datasets: [{
            label: `Nombre d'utilisateurs connecté `,
            data: userConnected.map(u => u.nbrUsers),
            backgroundColor: [
                'rgba(10, 25, 50, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(80, 80, 120, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(12, 33, 90, 0.6)',
                'rgba(150, 89, 90, 0.6)'
            ],

        }]
    };


    var options = {
        title: {
            display: true,
            text: 'Largest Cities In ',
            fontSize: 25
        },
    }

    return (
        <div className='row'>
            <div className="col-md-6">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Liste des utilisateurs</h3>

                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart">
                            <Pie
                                data={dataUserProfil}
                                options={options}
                            />
                        </div>
                    </div>
                </div>



            </div>
            <div className="col-md-6">
                <div className="card card-info">
                    <div className="card-header">
                        <h3 className="card-title">Statistiques du connection</h3>

                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart">
                        <Bar data={dataUserConnected}
                      options={options}
                      height={50}
                    />
                        </div>
                    </div>
                </div>



            </div>
            <div className="col-md-12">
                <div className="card card-info">
                    <div className="card-header">
                        <h3 className="card-title">Statistiques d'inscription</h3>

                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart">
                        <Line
                      data={dataUserCreated}
                      options={options}
                    />
                        </div>
                    </div>
                </div>



            </div>
        </div>


    );
}

export default StatUser;