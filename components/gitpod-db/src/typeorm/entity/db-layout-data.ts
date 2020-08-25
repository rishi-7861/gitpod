/**
 * Copyright (c) 2020 TypeFox GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

import { PrimaryColumn, Column, Entity } from "typeorm";

import { LayoutData } from "@gitpod/gitpod-protocol";
import { TypeORM } from "../typeorm";
import { Transformer } from "../transformer";

@Entity()
export class DBLayoutData implements LayoutData {

    @PrimaryColumn(TypeORM.UUID_COLUMN_TYPE)
    workspaceId: string;

    @Column({
        type: 'timestamp',
        precision: 6,
        transformer: Transformer.MAP_ISO_STRING_TO_TIMESTAMP_DROP
    })
    lastUpdatedTime: string;

    @Column()
    layoutData: string;
    
}