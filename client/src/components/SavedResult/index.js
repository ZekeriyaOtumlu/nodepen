import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Row, Col } from '../Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { List, ListItem } from '../../components/List';

const SavedResult = (props) => {
	return props.savedVacations.length === 0 ? (
		<div className="card">
			<div className="card-body player">
				<div className="article" />
			</div>
		</div>
	) : (
		<div className="card">
			<div className="card-body player">
				<div className="article">
					<h3>Landmarks that you have saved</h3>

					<List>
						{props.savedVacations.map((savedVacations) => {
							return (
								<ListItem key={savedVacations.id}>
									<div className="fullResults">
										<div className="name">
											<h3>{savedVacations.name}</h3>
										</div>
										<div className="center">
											<img id="placemg" src={savedVacations.image} />
											<iframe
												id="forecast_embed"
												title={savedVacations.name}
												frameBorder="0"
												height="200px"
												width="60%"
												src={savedVacations.src}
											/>


											<Button
												id={savedVacations._id}
												variant="contained"
												color="secondary"
												onClick={() => props.handleDeleteButton(savedVacations._id)}
												startIcon={<DeleteIcon />}
											>
												Delete
											</Button>
										</div>
										<div className="address">{savedVacations.address}</div>

										{/* <input type="checkbox" id="vehicle1" onChange={(event) => props.handleInputChange(event, savedVacations._id, savedVacations.visited)} checked={savedVacations.visited} name="vehicle1" value={savedVacations.visited}></input> */}

										<FormControlLabel
											control={
												<Checkbox
													// checked={checked}
													onChange={(event) =>
														props.handleInputChange(
															event,
															savedVacations._id,
															savedVacations.visited
														)}
													checked={savedVacations.visited}
													name="vehicle1"
													value={savedVacations.visited}
													inputProps={{ 'aria-label': 'primary checkbox' }}
													label="hi"
												/>
											}
											label="VISITED"
										/>
									</div>
								</ListItem>
							);
						})}
					</List>
				</div>
			</div>
		</div>
	);
};
export default SavedResult;
