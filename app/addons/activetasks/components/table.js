// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.
import React from 'react';
import ActiveTasksTableBody from './tablebody';
import ActiveTasksTableHeader from './tableheader';
import { Table } from 'react-bootstrap';

export default class ActiveTaskTable extends React.Component {
  render() {
    const {
      tasks,
      selectedRadio,
      searchTerm,
      sortByHeader,
      onTableHeaderClick,
      headerIsAscending,
      isLoading
    } = this.props;

    return (
      <div id="dashboard-lower-content">
        <Table striped className="table-active-tasks">
          <ActiveTasksTableHeader
            onTableHeaderClick={onTableHeaderClick}
            sortByHeader={sortByHeader}
            headerIsAscending={headerIsAscending}/>
          <ActiveTasksTableBody
            tasks={tasks}
            selectedRadio={selectedRadio}
            isLoading={isLoading}
            searchTerm={searchTerm}/>
        </Table>
      </div>
    );
  }
}
