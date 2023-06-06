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


import { PreviewService } from '../../services/preview.service';
import {Component,ViewChild,Input} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService, DiscoveryApiService } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AppConfigService } from '@alfresco/adf-core';
import { AppDefinitionRepresentationModel,
    TaskAttachmentListComponent,
    TaskUploadService,
} from '@alfresco/adf-process-services';
//import { PreviewService } from '../../services/preview.service';

    export function taskUploadServiceFactory(api: AlfrescoApiService, config: AppConfigService, discoveryApiService: DiscoveryApiService) {
        return new TaskUploadService(api, config, discoveryApiService);
    }
@Component({
    selector: 'app-home-view',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    //imports: [CdkDrag,DragDropModule],
    providers: [
        {
            provide: UploadService,
            useFactory: (taskUploadServiceFactory),
            deps: [AlfrescoApiService, AppConfigService, DiscoveryApiService]
        }
    ]
    
})
export class HomeComponent  {
    @ViewChild(MatAccordion) accordion: MatAccordion;
    panelOpenState = false;
    @ViewChild('taskAttachList')
    taskAttachList: TaskAttachmentListComponent;

    @Input()
    taskId: string;
    appId: number;
    defaultAppId: number;

    prefix = "files/"

    constructor(
        private router:Router,
        private route:ActivatedRoute,
            //private uploadService: UploadService,
            //private activitiTaskList: TaskListService
        private preview: PreviewService
            

    ){
        console.log("router",this.router)
        console.log("route",this.route);

    }

    showFile(event) {
        const entry = event.value.entry;
        if (entry && entry.isFile) {
            this.preview.showResource(entry.id);
        }
    }

    onNodeClicked(event: any)
    {
        console.log("event",event)
    }
    onFileUploadComplete(content: any) {
        this.taskAttachList.add(content);
    }

    /* onAttachmentClick(content: any): void {
        this.preview.showBlob(content.name, content.contentBlob);
    } */

    /* isCompletedTask(): boolean {
        return this.taskDetails && this.taskDetails.endDate !== undefined && this.taskDetails.endDate !== null;
    } */

    onAppClicked(app: AppDefinitionRepresentationModel) {
        console.log("app id",app.id);
        //this.router.navigate(['/activiti/apps', app.id || 0, 'tasks']);
        this.router.navigate(['/activiti/apps', app.id,'processes']);
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
    taskRowClick(){
        console.log("task clickced");
        this.router.navigateByUrl('activiti/apps/0/tasks');

    }
    getNodeIDByFolderName(folderName){
        switch(folderName){
            //the names and folder nodeIDs below can be changed at will!
            case 'drawings': return '9ceffb48-0cc0-4341-8720-e16d21166005/';
            case 'eq': return '0a9f912f-fba4-480d-9ee2-c4f2e894ccf8';
            case 'airbrakes': return '7d5cb795-9ba5-40cb-97f9-6e93b3e80406';
            default:return '295621ee-6a31-4251-86ac-fb5df2920501';
        }
    }
}
