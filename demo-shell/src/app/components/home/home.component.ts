/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component,ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
//import { FilesComponent } from '../files/files.component';
import { AppDefinitionRepresentationModel } from '@alfresco/adf-process-services';


@Component({
    selector: 'app-home-view',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    
})
export class HomeComponent  {
    @ViewChild(MatAccordion) accordion: MatAccordion;
    panelOpenState = false;

    prefix = "files/"

    constructor(
        private router:Router,
        private route:ActivatedRoute
    ){
        console.log("router",this.router)
        console.log("route",this.route);

    }

    onAppClicked(app: AppDefinitionRepresentationModel) {
        this.router.navigate(['/activiti/apps', app.id || 0, 'tasks']);
}
    routeToFolder(folderName){
        console.log("folderName",folderName);
        this.navigate(folderName);
    }

    navigate(folderName){
        if (folderName == 'search')
        {this.router.navigateByUrl("search-filter-chips");}
        else
        {this.router.navigateByUrl(this.prefix + this.getNodeIDByFolderName(folderName));}
    }

    getNodeIDByFolderName(folderName){
        switch(folderName){
            case 'Trains': return '86f19222-3266-4f0f-b680-d655ae71fcfc';
            case 'Rails': return 'd17e26bb-0f05-4ce6-8e3f-f538e00b285d';
            case 'Busses': return 'ed08aca0-cd05-4fc0-935e-b9c016e2847a';
            default:return '295621ee-6a31-4251-86ac-fb5df2920501';
        }
    }
}
