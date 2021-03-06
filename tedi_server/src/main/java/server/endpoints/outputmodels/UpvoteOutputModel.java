package server.endpoints.outputmodels;

import java.util.List;

public class UpvoteOutputModel {
	
	private String upvoterName;
	private String upvoterSurname;
	private String upvoterPicture;
	private List<ExperienceOutputModel> upvoterCurrentExperience;
	private Long upvoterId;
	
	public UpvoteOutputModel() {}

	public String getUpvoterName() {
		return upvoterName;
	}

	public String getUpvoterSurname() {
		return upvoterSurname;
	}

	public String getUpvoterPicture() {
		return upvoterPicture;
	}
	
	public List<ExperienceOutputModel> getUpvoterCurrentExperience() {
		return upvoterCurrentExperience;
	}

	public Long getUpvoterId() {
		return upvoterId;
	}

	public void setUpvoterName(String upvoterName) {
		this.upvoterName = upvoterName;
	}

	public void setUpvoterSurname(String upvotedSurname) {
		this.upvoterSurname = upvotedSurname;
	}
	
	public void setUpvoterPicture(String upvoterPicture) {
		this.upvoterPicture = upvoterPicture;
	}

	public void setUpvoterCurrentExperience(List<ExperienceOutputModel> upvoterCurrentExperience) {
		this.upvoterCurrentExperience = upvoterCurrentExperience;
	}
	
	public void addUpvoterCurrentExperience(ExperienceOutputModel upvoterCurrentExperience) {
		this.upvoterCurrentExperience.add(upvoterCurrentExperience);
	}

	public void setUpvoterId(Long upvoterId) {
		this.upvoterId = upvoterId;
	}

}
