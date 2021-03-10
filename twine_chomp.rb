module TwineChomp
  class Generator < Jekyll::Generator
    def generate(site)
    # undergraduate.html should be changed to whatever the regular filename will be for the story.
      file_in = File.open("pages/undergraduate.html", "r")
      story_in = file_in.readlines
      file_in.close
      story_in.shift(10)
      story_in.pop(2)
      # need to update the template to use this auto-generated file instead.
      File.open("pages/story_out.html", 'w'){ |f|
      f.puts(story_in)
      }
    end
  end
end