import React, { useEffect, useState } from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

function StatProjet() {

    const url = "http://localhost:8000/api";
    const [projetCreated, setProjetCreated] = useState([]);
    const [projetByLoc, setProjetByLoc] = useState([]);
    const [projetByEtat, setProjetByEtat] = useState([]);




    const fetchProjetCreated = async () => {

        await fetch(`${url}/projet/index`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((json) => {
                console.log(json)
                setProjetCreated(json);
            })

        }).catch(error => {
            console.log(error)
        })


    }
    const fetchProjetByLocalisation = async () => {

        await fetch(`${url}/projet/index2`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((json) => {
                console.log(json)
                setProjetByLoc(json);
            })

        }).catch(error => {
            console.log(error)
        })


    }
    const fetchProjetByEtat = async () => {

        await fetch(`${url}/projet/index3`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((json) => {
                console.log(json)
                setProjetByEtat(json);
            })

        }).catch(error => {
            console.log(error)
        })


    }


    useEffect(() => {
        fetchProjetCreated();
        fetchProjetByLocalisation();
        fetchProjetByEtat();

    }, [url])

    var dataProjectCreated = {
        labels: projetCreated.map(u => u.DateCreat),
        datasets: [{
            label: `Nombre de projets par jours`,
            data: projetCreated.map(u => u.nbrProjet),
            backgroundColor: [
                'rgba(10, 25, 50, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(80, 80, 120, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(12, 33, 90, 0.6)',
                'rgba(150, 89, 90, 0.6)'],
        }]
    };
    var dataProjectByLoc = {
        labels: projetByLoc.map(u => u.nomPays),
        datasets: [{
            label: `Nombre de projets par localisation`,
            data: projetByLoc.map(u => u.nbrProjet),
            backgroundColor: [
                'rgba(10, 25, 50, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(80, 80, 120, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(12, 33, 90, 0.6)',
                'rgba(150, 89, 90, 0.6)'],
        }]
    };
    var dataProjectByEtat = {
        labels: projetByEtat.map(u => u.EtatProj),
        datasets: [{
            label: `Nombre de projets par état`,
            data: projetByEtat.map(u => u.nbrProjet),
            backgroundColor: [
                'rgba(10, 25, 50, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(80, 80, 120, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(12, 33, 90, 0.6)',
                'rgba(150, 89, 90, 0.6)'],
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
            <div className="col-md-12">
                <div className="card card-info">
                    <div className="card-header">
                        <h3 className="card-title">Statistiques des projets par localisation</h3>

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
                            <Bar
                                data={dataProjectByLoc}
                                options={options}
                            />
                        </div>
                    </div>
                </div>



            </div>
            <div className="col-md-12">
                <div className="card card-info">
                    <div className="card-header">
                        <h3 className="card-title">Statistiques des projets par état</h3>

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
                            <Bar
                                data={dataProjectByEtat}
                                options={options}
                            />
                        </div>
                    </div>
                </div>



            </div>
            <div className="col-md-12">
                <div className="card card-info">
                    <div className="card-header">
                        <h3 className="card-title">Statistiques desprojet creé par jour</h3>

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
                                data={dataProjectCreated}
                                options={options}
                            />
                        </div>
                    </div>
                </div>



            </div>
        </div>


    );
}

export default StatProjet;