import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Title from './Title';

import 'ol/ol.css'
import {OSM} from 'ol/source'
import { Map, View } from 'ol'
import {fromLonLat} from 'ol/proj'
import Grid from '@material-ui/core/Grid'
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer'
import { 
    ScaleLine,
    defaults as DefaultControls
} from 'ol/control'

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorS from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';

export default class OLMap extends Component {    

    componentDidMount() {

        const map = new Map({
            interactions: defaultInteractions().extend([
                new DragRotateAndZoom()
            ]),
            target: 'map',
            layers: [
                new TileLayer({source: new OSM()})
            ],
            controls: DefaultControls().extend([
                new ScaleLine(),
            ]),
            view: new View({
                center: fromLonLat([35.539460, 32.7885]),
                zoom: 13
            })
        });

        const layer = new VectorLayer({
            source: new VectorS({
                features: [
                    new Feature({
                        geometry: new Point(fromLonLat([35.53947, 32.7887]))
                    })
                ]
            }),
            style: new Style({
                image: new Icon({
                  src: 'https://openlayers.org/en/latest/examples/data/icon.png'
                })
              })
        });
        map.addLayer(layer);
    }


    render() {
        return (
            <>
                <section className="services">
                    <Title title="איך למצוא אותנו?"/>
                    <h6 style={{fontWeight: '600'}}
                    >3 דקות מתחנת האוטובוס,3 דקות מקו המים ...</h6>
                    <Grid container>
                        <Grid item xs={12}>
                            <div id='map' className="map" >
                            </div>
                        </Grid>
                    </Grid>

                    <h6>הוראות להגעה ברכב או בתחבורה ציבורית -</h6>
                    
                    <div>
                        <Link target={"_blank"} to="/tlv" className="btn-primary2 btns-map">מתל אביב</Link>
                        <Link target={"_blank"} to="/haifa" className="btn-primary2 btns-map">מחיפה</Link>
                        <Link target={"_blank"} to="/jerusalem" className="btn-primary2 btns-map">מירושלים</Link>
                        <Link target={"_blank"} to="/nazeret" className="btn-primary2 btns-map">מנצרת</Link>
                    </div >

                </section>
            </>
        );
    }
}