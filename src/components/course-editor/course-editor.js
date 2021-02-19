import React from 'react'
import {Link} from "react-router-dom";
import './course-editor.css'

const CourseEditor = ({history}) =>
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <div className="col-4 ">
                    <h5><i className="fas fa-times " onClick={() => history.goBack()}></i>&nbsp;&nbsp;&nbsp;CS5610 - WebDev</h5>
                </div>
                <div className="col-8 ">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="#">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" href="#">Modules</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Grades</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">People</Link>

                        </li>
                        <li className="nav-item">

                        </li>

                    </ul>

                </div>

            </div>
        </nav>

        <div class="container modules_layout">

            <div class="row ">
                <div class="col-4">

                    <ul class="list-group ">
                        <li class="list-group-item list-group-item-dark active">
                            Module 1
                            <i class="pull-right fa fa-trash"></i>
                        </li>
                        <li class="list-group-item list-group-item-dark">
                            Module 2
                            <i class="pull-right fa fa-trash"></i>
                        </li>
                        <li class="list-group-item list-group-item-dark">Module 3
                            <i class="pull-right fa fa-trash"></i></li>
                        <li class="list-group-item list-group-item-dark">Module 4
                            <i class="pull-right fa fa-trash"></i></li>
                        <li class="list-group-item list-group-item-dark">Module 5 <i class="pull-right fa fa-trash"></i></li>
                        <li class="list-group-item list-group-item-dark">Module 6 <i class="pull-right fa fa-trash"></i></li>
                        <li class="list-group-item list-group-item-dark">Module 7 <i class="pull-right fa fa-trash"></i></li>
                        <li class="list-group-item list-group-item-success text-center"><Link class="btn" href="#" ><i class="fa fa-plus"></i> Add Module</Link></li>
                    </ul>

            </div>
            <div class="col-8 bg-light">
                <div class="row pills-layout">
                    <div class="col-8">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <Link class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Topic 1</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Topic 2</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Topic 3</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <Link class="btn btn-success" href="#" ><i class="fa fa-plus"> </i> Add Topic</Link>
                </div>
            </div>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui</div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>


        </div>
    </div>
</div>

    </div>

export default CourseEditor