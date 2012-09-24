class RegistrationController < ApplicationController
  def index
  	@contents = Content.new
  	@posts = Content.all

  end

  def submit
  	@content = Content.new
    @content.commenter = params[:content][:content_commenter]
    @content.body = params[:content][:content_body]

  	if @content.save
  		render :json => {:err=>nil, :data =>{:template => (render_to_string :layout=>false ) } }
  	else
  		render :json => {:err=>"e1", :data => nil }
  	end
  end

  def destroy
  		@post = Content.find(params[:id])
		@post.destroy
		redirect_to root_path

  end



end
