class User < ApplicationRecord

	validates_uniqueness_of :username

	def self.generate
		adjectives = ['Ancient', 'Creative', 'Immortal', 'Questionable', 'Unruly']
		nouns = ['Puppy', 'Cat', 'Parrot', 'Fish', 'Turtle']
		number = rand.to_s[2..5]
		username = "#{adjectives.sample}-#{nouns.sample}-#{number}"
		create(username: username)
	end

end
