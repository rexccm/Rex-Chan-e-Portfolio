const BackendDevelopment = () => { 
    return (
        <section className="article-section">
            <h3 className="section-heading">Backend Development</h3>
            <ul className="related-career-history">
                <li>Education: Internet Programming (A-) | Database Management (A)</li>
            </ul>
            <p>Developed basic concepts of CRUD, salting, and injections by PHP in Internet Programming course in Higher Diploma programme.</p>
            <p>Built-up a login and signup system by using PHP and MySQL on XAMPP environment.</p>
            <section className="article-section">
                <h4 className="section-heading">CRUD Operations</h4>
                <p>Create, read, update, and delete (CRUD) are the basic operations of data manipulation.</p>
                <figure className="presentation-video">
                    <video autoPlay muted loop>
                        <source src="https://cdn.shopify.com/videos/c/o/v/2da43598b08c48e089a7b82b76a3088d.mp4" type="video/mp4" />
                    </video>
                    <figcaption>Signup and Login System, 2018</figcaption>
                </figure>
                <ul id="crud-operations">
                    <li><b>Create</b>: To create a resource, developer sends a POST request containing an object with properties to the API point like /api/products, which then responds with an object which has an ID that includes the relevant data fields.</li>
                    <li><b>Read</b>: To read a resource, developer sends a GET request to the API endpoint, and then it responds with a list or single object. We sends that request to the original API endpoint like /api/products when we want to read all of the data, while we sends the request to the endpoint with its ID like /api/products/1 if we to search for specific data. </li>
                    <li><b>Update</b>: To update a resource, developer sends a PUT request containing the updated object to the API endpoint with ID, and then it responds with an object included the relevant data fields. </li>
                    <li><b>Delete</b>: To delete a resource, developer sends a DELETE request to the API endpoint with the target ID. However, the delete request is not prefer to use due to concerns about data integrity in reality. </li>
                </ul>
            </section>
            <section className="article-section">
                <h4 className="section-heading">Salting</h4>
                <p>Salting is a security technique used to enhance password hashing by adding a random value called salt. This makes it more difficult for attackers to use precomputed tables such as rainbow tables to crack passwords.</p>
                <p>In this process, the salt is concatenated and processed with a cryptographic hashing algorithm, and the output is stored along with the salt in the database.</p>
                <figure>
                    <div className="one-way-dataflow-container">
                        <div className="one-way-dataflow-box"><p>rexChan123</p> <p>(Password)</p></div>
                        <div className="one-way-dataflow-arrow">→</div>
                        <div className="one-way-dataflow-box"><p>rexChan123rteZb</p> <p>(Password + Salt)</p></div>
                        <div className="one-way-dataflow-arrow">→</div>
                        <div className="one-way-dataflow-box"><p>4b6f9b7e5e2a6b4e6e5b1d32b9b96b223b6f2c5b5dbb5d3e1ff9d3d06b6a3b5a</p> <p>(Hashed Password + Salt)</p></div>
                    </div>
                    <figcaption className="figure-caption">Password Hash Salting Figure</figcaption>
                </figure>
            </section>
            <section className="article-section">
                <h4 className="section-heading">Code Injection</h4>
                <p>Injection attacks like SQL injection occur when an attacker is able to inject malicious code into a query or command in order to exfiltrate data or damage storage.</p>
                <section className="article-section">
                    <h5 className="section-heading">SQL Injection</h5>
                    <p>SQL injection attack consists of injection of malicious SQL commands via input data from the client to the application that are later passed to an instance of a database for execution and aim to affect the execution of predefinec SQL commands.</p>
                    <p>The primary form of SQL injection consists of direct insertion of code into user-input variables which are concatenated with SQL commands and executed.</p>
                    <p>A less direct attack injects malicious code into strings are subsequently concatenated into a dynamic SQL commands, the malicious code is then executed.</p>
                    <p>A successful SQL injection exploit can access sensitive data in the database, modify database data, execute administrative operations whithin the database, for instance, shutdown the DBMS, recover the content of a given file present on the DBMS file system and in some cases issue commands to the operating system.</p>
                </section>
            </section>
            <section className="article-section">
                <h4 className="section-heading">Database Management</h4>
                <section className="article-section">
                    <h5 className="section-heading">Data Hierarchy</h5>
                    <figure>
                        <ol id="data-hierarchy">
                            <li className="data-level">Database / Storage</li>
                            <li className="data-level">Table / File</li>
                            <li className="data-level">Row / Record</li>
                            <li className="data-level">Column / Field</li>
                            <li className="data-level">Byte / Character</li>
                            <li className="data-level">Bit</li>
                        </ol>
                        <figcaption className="figure-caption">Data Hierarchy Figure</figcaption>
                    </figure>
                </section>
                <section className="article-section">
                    <h5 className="section-heading">Normalization</h5>
                    <p>Normalization is a systematic approach of decomposing tables to eliminate data redundancy. A flat file database store all the data in one table which led to anomalies.</p>
                    <figure className="limited-figure">
                        <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/dse-sba-2015.jpg?v=1771150144" />
                        <figcaption className="figure-caption">DSE SBA Normalization, 2015</figcaption>
                    </figure>
                    <p>Data redundancy refers to repetition of data stored in different locations. Storing same data redundantly in more than one place within a database can lead to anomalies.</p>
                    <ul>
                        <li><b>Update Anomalies</b>: Once one copy of repeated data is updated, inconsistency is created unless all copies updated.</li>
                        <li><b>Insertion Anomalies</b>: It may not be possible to store some data unless the other is stored as well.</li>
                        <li><b>Deletion Anomalies</b>: It may not be possible to drop some data unless the other is dropped as well.</li>
                    </ul>
                </section>
                <section className="article-section">
                    <h5 className="section-heading">Keys</h5>
                    <figure className="limited-figure">
                        <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/database-management-assignment-2018.jpg?v=1771150972" />
                        <figcaption className="figure-caption">Database Management Assignment, 2018</figcaption>
                    </figure>
                    <ul>
                        <li><b>Primary Key</b>: A primary key is a attribute  or a combination of attributes (known as composite key) in a table to uniquely identify a record.</li>
                        <li><b>Candidate Key</b>: A candidate key is a minimal set of attributes that uniquely identifies a record in a table.</li>
                        <li><b>Composite Key</b>: A composite key is a combination of two or more attributes that uniquely identifies a record in a table.</li>
                        <li><b>Super Key</b>: A super key is any set of attributes that uniquely identifies a record in a table.</li>
                        <li><b>Foreign Key</b>: A foreign key is a attribute or a combination of attributes in a table which refers to the primary key of another table.</li>
                    </ul>
                </section>
                <section className="article-section">
                    <h5 className="section-heading">Data Dictionary</h5>
                    <p>A data dictionary is a collection of table structures which explains an unfamiliar dataset and clarifies the meanings of various data terms to developers and users by listing codes, data types, lengths, examples, and descriptions of the fields.</p>
                    <figure className="limited-figure">
                        <img src="https://cdn.shopify.com/s/files/1/0626/2253/1645/files/database-management-assignment-data-dictionary-2018.jpg?v=1771180653" />
                        <figcaption className="figure-caption">Data Dictionary, 2018</figcaption>
                    </figure>
                </section>
            </section>
            <section id="orm" className="article-section">
                <h4 className="section-heading">ORM</h4>
                <p>To against SQL injection, ORM is a backend approach that provides a layer of abstraction that helps prevent SQL injection attacks by automatically escaping user input and generating safe SQL queries.</p>
                <p>An object-relational mapping (ORM), also referred to as object-relational manager, is a process of connecting objects in an object-oriented programming language to tables in an underlying relational database.</p>
                <p>When building backends, developers define objects as a SQL-free data representation in a modular application to query and manipulate data in databases using the same logic as the backend code.</p>
                <p>However, this approach slows down CRUD performance because of the overhead of abstraction.</p>
            </section>
            {/* }
            <section className="article-section">
                <h4>Code Injections</h4>
            </section>
            <section className="article-section">
                <h4>Database Management</h4>
                <section className="article-section">
                    <h5>Data Hierarchy</h5>
                    <figure>
                        <ol id="data-hierarchy">
                            <li className="data-level">Database / Storage</li>
                            <li className="data-level">Table / File</li>
                            <li className="data-level">Row / Record</li>
                            <li className="data-level">Column / Field</li>
                            <li className="data-level">Byte / Character</li>
                            <li className="data-level">Bit</li>
                        </ol>
                        <figcaption className="figure-caption">Data Hierarchy Figure</figcaption>
                    </figure>
                </section>
                <section className="article-section">
                    <h5>Keys</h5>
                    <ul>
                        <li><b>Primary Key</b></li>
                        <li><b>Candidate Key</b></li>
                        <li><b>Composite Key</b></li>
                        <li><b>Super Key</b></li>
                        <li><b>Foreign Key</b></li>
                    </ul>
                </section>
                <section className="article-section">
                    <p>Data modeling is the process of creating visual representations of data and their relationships.</p>
                    <p>Data modeling translates reality into models in order to analyze the client requirements of data storage and required information.</p>
                    <p>By defining data and their relationships, developers organize information to support efficient storage so as to improve performance and decision-making.</p>
                    <p>Data modeling employs standardized techniques including schema, ER Diagram, and data dictionary to provide a common, consistent, and predictable way of data management.</p>
                    <ul id="data-modeling-techniques">
                        <li><b>Schema</b></li>
                        <li><b>ER Diagram</b></li>
                        <li><b>Data Dictionary</b>: A data dictionary is a collection of table structures which explains an unfamiliar dataset and clarifies the meanings of various data terms to developers and users by listing codes, data types, lengths, examples, and descriptions of the fields.</li>
                    </ul>
                </section>
                <section className="article-section">
                    <h5>SQL</h5>
                    <ul>
                        <li><b>Data Definition Language (DDL)</b></li>
                        <li><b>Data Manipulation Language (DML)</b></li>
                        <li><b>Data Control Language (DCL)</b></li>
                        <li><b>Transaction Control Language (TCL)</b></li>
                        <li><b>Joining</b></li>
                        <li><b>Views</b></li>
                    </ul>
                </section>
            </section>
            */}
        </section>
    ); 
}

export default BackendDevelopment;