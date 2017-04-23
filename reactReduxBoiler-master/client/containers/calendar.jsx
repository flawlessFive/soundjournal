import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSong } from '../actions/getSong.js';

class Calendar extends Component {



  render() {
    return (
     <div>
        <div className="container">
          <div className="row">
            <div id="overview" className="col-sm-4 col-md-3 animated bounceInUp">
              <h2>Your Calendars</h2>
              <h5><a data-toggle="collapse" href="#collapseTwo">
                  <i className="fa fa-cal fa-fw" />Calendars you Follow
                </a></h5>
              <div id="collapseTwo" className="collapse in">
                <div className="list-group">
                  <div className="list-group-item">
                    <a href="#course_1" data-toggle="collapse" className="text-success"><strong>Friends</strong></a> 
                    <span className="badge pull-right">2</span>
                    <div id="course_1" className="collapse">
                      Sherry's Calendar
                    </div>
                    <div id="course_1" className="collapse">
                      Daria's calendar
                    </div>
                  </div>
                </div>
              
                <div className="checkbox">
                  <label>
                    <input type="checkbox" defaultValue />
                    <a href="#course_2" data-toggle="collapse" className="text-info"><strong>Sherry's Calendar</strong></a> 
                  </label><span className="badge pull-right">1</span>
                 <label>
                    <input type="checkbox" defaultValue />
                    <a href="#course_2" data-toggle="collapse" className="text-info"><strong>Daria's Calendar</strong></a> 
                  </label><span className="badge pull-right"></span>
                  <label>
                    <input type="checkbox" defaultValue />
                    <a href="#course_2" data-toggle="collapse" className="text-info"><strong>Tionna's Calendar</strong></a> 
                  </label><span className="badge pull-right"></span>
                </div>

                <div id="course_2" className="collapse">
                  <hr style={{margin: '10px auto'}} />
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />
                      Sam G.'s Calendar
                    </label>
                  </div>
                </div>
              </div>                
            </div>
            {/* End Column */}
            <div id="calendar" className="col-sm-8 col-md-9 animated animated-sm bounceInUp">
              <h2><small></small><i className="fa fa-plus fa-fw pull-right small btn btn-block" /></h2>
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="calendar fc fc-ltr">
                    <table className="fc-header" style={{width: '100%'}}>
                      <tbody>
                        <tr>
                          <td className="fc-header-center"> <span className="fc-header-title"><h2>April 2017</h2>      </span>
                          </td>
                          
                          
                        </tr>
                      </tbody>
                    </table>
                    <div className="fc-content" style={{position: 'relative', minHeight: 1}}>
                      <div className="fc-view fc-view-month fc-grid" style={{position: 'relative', minHeight: 1}} unselectable="on">
                        <div style={{position: 'absolute', zIndex: 8, top: 0, left: 0}}>
                          <div className="fc-event fc-event-hori fc-event-draggable fc-event-start fc-event-end ui-draggable" style={{position: 'absolute', zIndex: 8, left: 495, top: 60}} unselectable="on">
                            <div className="fc-event-inner" onClick={() => { this.props.getSong(1)}}> <span className="fc-event-title" style={{position: 'relative', left: 18, top: 10, fontSize: 20}}></span>
                            </div>
                            <div className="ui-resizable-handle ui-resizable-e">&nbsp;&nbsp;&nbsp;</div>
                          </div>
                          <div className="fc-event fc-event-hori fc-event-draggable fc-event-start" style={{position: 'absolute', zIndex: 8, left: 804, width: 304, top: 352}}>
                            <div className="fc-event-inner"  onClick={() => { this.props.getSong(1)}}> <span className="fc-event-title" style={{position: 'relative', left: 18, top: 10, fontSize: 20}}></span>
                            </div>
                          </div>
                          <div className="fc-event fc-event-hori fc-event-draggable fc-event-end" style={{position: 'absolute', zIndex: 8, left: 20, top: 470}}>
                            <div className="fc-event-inner"  onClick={()=> {this.props.getSong(2)}}> <span className="fc-event-title" style={{position: 'relative', left: 17, top: 9, fontSize: 20}}></span>
                            </div>
                            <div className="ui-resizable-handle ui-resizable-e">&nbsp;&nbsp;&nbsp;</div>
                          </div>
                          <div className="fc-event fc-event-hori fc-event-draggable fc-event-start fc-event-end" style={{position: 'absolute', zIndex: 8, left: 306, top: 265}}>
                            <div className="fc-event-inner"  onClick={() => { this.props.getSong(3)}}> <span className="fc-event-title" style={{position: 'relative', top: 11, left: 18, fontSize: 20}}></span>
                            </div>
                            <div className="ui-resizable-handle ui-resizable-e">&nbsp;&nbsp;&nbsp;</div>
                          </div>
                        </div>
                        <table className="fc-border-separate" style={{width: '100%'}} cellSpacing={0}>
                          <thead>
                            <tr className="fc-first fc-last">
                              <th className="fc-day-header fc-sun fc-widget-header fc-first" style={{width: 158}}>Sun</th>
                              <th className="fc-day-header fc-mon fc-widget-header" style={{width: 158}}>Mon</th>
                              <th className="fc-day-header fc-tue fc-widget-header" style={{width: 158}}>Tue</th>
                              <th className="fc-day-header fc-wed fc-widget-header" style={{width: 158}}>Wed</th>
                              <th className="fc-day-header fc-thu fc-widget-header" style={{width: 158}}>Thu</th>
                              <th className="fc-day-header fc-fri fc-widget-header" style={{width: 158}}>Fri</th>
                              <th className="fc-day-header fc-sat fc-widget-header fc-last" style={{width: 158}}>Sat</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="fc-week fc-first">
                              <td className="fc-day fc-sun fc-widget-content fc-other-month fc-first" data-date="2013-12-29">
                                <div style={{minHeight: 80}}>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-mon fc-widget-content fc-other-month" data-date="2013-12-30">
                                <div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-tue fc-widget-content fc-other-month" data-date="2013-12-31">
                                <div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-wed fc-widget-content" data-date="2014-01-01">
                                <div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-thu fc-widget-content" data-date="2014-01-02">
                                <div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-fri fc-widget-content" data-date="2014-01-03">
                                <div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-sat fc-widget-content fc-last" data-date="2014-01-04">
                                <div>
                                  <div className="fc-day-number">1</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="fc-week">
                              <td className="fc-day fc-sun fc-widget-content fc-first" data-date="2014-01-05">
                                <div style={{minHeight: 80}}>
                                  <div className="fc-day-number">2</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-mon fc-widget-content" data-date="2014-01-06">
                                <div>
                                  <div className="fc-day-number">3</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-tue fc-widget-content" data-date="2014-01-07">
                                <div>
                                  <div className="fc-day-number">4</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-wed fc-widget-content" data-date="2014-01-08">
                                <div>
                                  <div className="fc-day-number">5</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-thu fc-widget-content" data-date="2014-01-09">
                                <div>
                                  <div className="fc-day-number">6</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-fri fc-widget-content" data-date="2014-01-10">
                                <div>
                                  <div className="fc-day-number">7</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-sat fc-widget-content fc-last" data-date="2014-01-11">
                                <div>
                                  <div className="fc-day-number">8</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="fc-week">
                              <td className="fc-day fc-sun fc-widget-content fc-first" data-date="2014-01-12">
                                <div style={{minHeight: 80}}>
                                  <div className="fc-day-number">9</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-mon fc-widget-content" data-date="2014-01-13">
                                <div>
                                  <div className="fc-day-number">10</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-tue fc-widget-content" data-date="2014-01-14">
                                <div>
                                  <div className="fc-day-number">11</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-wed fc-widget-content" data-date="2014-01-15">
                                <div>
                                  <div className="fc-day-number">12</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-thu fc-widget-content" data-date="2014-01-16">
                                <div>
                                  <div className="fc-day-number">13</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-fri fc-widget-content" data-date="2014-01-17">
                                <div>
                                  <div className="fc-day-number">14</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-sat fc-widget-content fc-last" data-date="2014-01-18">
                                <div>
                                  <div className="fc-day-number">15</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="fc-week">
                              <td className="fc-day fc-sun fc-widget-content fc-first" data-date="2014-01-19">
                                <div style={{minHeight: 80}}>
                                  <div className="fc-day-number">16</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative'}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-mon fc-widget-content" data-date="2014-01-20">
                                <div>
                                  <div className="fc-day-number">17</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative'}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-tue fc-widget-content" data-date="2014-01-21">
                                <div>
                                  <div className="fc-day-number">18</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative'}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-wed fc-widget-content fc-today fc-state-highlight" data-date="2014-01-22">
                                <div>
                                  <div className="fc-day-number">19</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative'}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-thu fc-widget-content" data-date="2014-01-23">
                                <div>
                                  <div className="fc-day-number">20</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative'}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-fri fc-widget-content" data-date="2014-01-24">
                                <div>
                                  <div className="fc-day-number">21</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative'}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-sat fc-widget-content fc-last" data-date="2014-01-25">
                                <div>
                                  <div className="fc-day-number">22</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative'}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="fc-week">
                              <td className="fc-day fc-sun fc-widget-content fc-first" data-date="2014-01-26">
                                <div style={{minHeight: 80}}>
                                  <div className="fc-day-number">23</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-mon fc-widget-content" data-date="2014-01-27">
                                <div>
                                  <div className="fc-day-number">24</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-tue fc-widget-content" data-date="2014-01-28">
                                <div>
                                  <div className="fc-day-number">25</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-wed fc-widget-content" data-date="2014-01-29">
                                <div>
                                  <div className="fc-day-number">26</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-thu fc-widget-content" data-date="2014-01-30">
                                <div>
                                  <div className="fc-day-number">27</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-fri fc-widget-content" data-date="2014-01-31">
                                <div>
                                  <div className="fc-day-number">28</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-sat fc-widget-content fc-other-month fc-last" data-date="2014-02-01">
                                <div>
                                  <div className="fc-day-number">29</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 25}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="fc-week fc-last">
                              <td className="fc-day fc-sun fc-widget-content fc-other-month fc-first" data-date="2014-02-02">
                                <div style={{minHeight: 80}}>
                                  <div className="fc-day-number">30</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-mon fc-widget-content fc-other-month" data-date="2014-02-03">
                                <div>
                                  <div className="fc-day-number">1</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-tue fc-widget-content fc-other-month" data-date="2014-02-04">
                                <div>
                                  <div className="fc-day-number">2</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-wed fc-widget-content fc-other-month" data-date="2014-02-05">
                                <div>
                                  <div className="fc-day-number">3</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-thu fc-widget-content fc-other-month" data-date="2014-02-06">
                                <div>
                                  <div className="fc-day-number">4</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-fri fc-widget-content fc-other-month" data-date="2014-02-07">
                                <div>
                                  <div className="fc-day-number">5</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                              <td className="fc-day fc-sat fc-widget-content fc-other-month fc-last" data-date="2014-02-08">
                                <div>
                                  <div className="fc-day-number">6</div>
                                  <div className="fc-day-content">
                                    <div style={{position: 'relative', height: 0}}>&nbsp;</div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className="modal fade" id="unlockModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="myModalLabel"><i className="fa fa-fw fa-unlock" /> Unlock Calendar</h4>
              </div>
              <div className="modal-body">
                <p className="h3 text-center text-primary"><i className="fa fa-thumbs-up" /> Woop!</p>
                <p className="lead text-center">Here's what happens when you unlock your calendar:</p>
                <hr />
                <div className="row">
                  <div className="col-xs-1"> <i className="fa fa-fw fa-thumbs-up text-primary" />
                  </div>
                  <div className="col-xs-11">You'll instantly get access to all <strong className="text-primary">67 shared assignments</strong> on your calendar.</div>
                  <div className="col-xs-1"> <i className="fa fa-fw fa-thumbs-up text-primary" />
                  </div>
                  <div className="col-xs-11">You'll be <strong>notified</strong> whenever a shared assignment is <strong>updated or edited</strong> throughout the semester.</div>
                  <div className="col-xs-1"> <i className="fa fa-fw fa-thumbs-up text-primary" />
                  </div>
                  <div className="col-xs-11">You'll be able to <strong>share your own calendar assignments</strong> with your class, which means you can start making money instantly.</div>
                  <div className="col-xs-1"> <i className="fa fa-fw fa-thumbs-up text-primary" />
                  </div>
                  <div className="col-xs-11">You'll gain access to special features of mchp, such as <strong>calendar integration</strong> in your College Pulse and in each of your class's activity sections.</div>
                </div>
                <hr />
                <div className="panel panel-default">
                  {/* Default panel contents */}
                  {/* Table */}
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Class Name</th>
                        <th># of Assignments</th>
                        <th>Unlock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i className="fa fa-book" /> ECON 200</td>
                        <td><strong className="text-primary"><i className="fa fa-calendar" /> 15 now</strong> + all future</td>
                        <td><i className="fa fa-check-circle text-success"> yes</i>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-book" /> ACCT 210</td>
                        <td><strong className="text-primary"><i className="fa fa-calendar" /> 22 now</strong> + all future</td>
                        <td><i className="fa fa-check-circle text-success"> yes</i>
                        </td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-book" /></td>
                        <td><strong className="text-primary"><i className="fa fa-calendar" /> 30 now</strong> + all future</td>
                        <td> <i className="fa fa-check-circle text-success"> yes</i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="panel-footer text-center">You're unlocking: <strong>3 classes</strong> for <strong>300 points</strong>
                  </div>
                </div>
              
            </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success">Unlock!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
 
  return bindActionCreators({ getSong : getSong }, dispatch);
}


export default connect(null, mapDispatchToProps)(Calendar);