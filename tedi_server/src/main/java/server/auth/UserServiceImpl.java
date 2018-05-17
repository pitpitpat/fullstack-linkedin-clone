package server.auth;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import server.entities.RoleEntity;
import server.entities.UserEntity;
import server.repositories.UserRepository;

@Component
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private BCryptPasswordEncoder bCryptEncoder;
	
	@Override
	public void save(UserEntity user) {
		user.setPassword(bCryptEncoder.encode(user.getPassword()));
		Set<RoleEntity> roleSet = new HashSet<>();
		roleSet.add(new RoleEntity("USER")); //only users are created after the first configuration
		user.setRoles(roleSet);
		userRepo.save(user);
	}
	
	@Override
	public void saveAdmin(UserEntity user) {
		user.setPassword(bCryptEncoder.encode(user.getPassword()));
		user.addRole(new RoleEntity("ADMIN"));
		userRepo.save(user);
	}
	
	@Override
	public UserEntity findByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	
}
