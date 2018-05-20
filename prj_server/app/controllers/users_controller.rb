class UsersController < ApiController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  def search
    @users = User.near(params[:loc],20)
    render :json => @users
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save

    if params[:image].present?
        # @cloudinary = Cloudinary::Uploader.upload(params[:user][:image])
        @cloudinary = Cloudinary::Uploader.upload(params[:image])
        @user.update :image => @cloudinary['url']
      end
      if params[:resumeu].present?
        @cloudinary = Cloudinary::Uploader.upload(params[:resumeu])
        @user.update :resumeu => @cloudinary['url']
      end

        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|

      if @user.update(user_params)
        if params[:image].present?
          @cloudinary = Cloudinary::Uploader.upload(params[:image])
          @user.update :image => @cloudinary['url']
        end
        if params[:resumeu].present?
          @cloudinary = Cloudinary::Uploader.upload(params[:resumeu])
          @user.update :resumeu => @cloudinary['url']
        end
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      # params.require(:user).permit(:email, :password, :password_confirmation,:image)

      params.permit(:email, :password, :password_confirmation, :image, :name, :description,:keyskills,:location,
      :latitude,:longitude,:resumeu,:githubu,:linkedinu,:insta,:twitteru)
      # params.require(:user).permit(:email, :password, :password_confirmation, :image, :name, :description,:keyskills,:location,
      # :latitude,:longitude,:resumeu,:githubu,:linkedinu,:insta,:twitteru)
    end
end
